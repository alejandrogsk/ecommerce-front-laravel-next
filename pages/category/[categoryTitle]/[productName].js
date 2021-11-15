import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/ui/global/Layout';
import ProductTemplate from '../../../components/ui/products/ProductTemplate';

import GetRelatedProducts  from '../../../components/ui/products/RelatedProductTemplate';

const Prueba = ({productData, categoryTitle}) => {

    const { product } = productData;

    return (
        <Layout>
            <Head>
                <title>{product.name}</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            
            <ProductTemplate  product={product} categoryTitle={categoryTitle}/>


            <GetRelatedProducts categoryTitle={categoryTitle} productId={product.id} />
        </Layout>
    )
}
export default Prueba;



export async function getStaticPaths() {
    const reqProductsPaths = await fetch(process.env.NEXT_PUBLIC_LARAVEL_PRODUCTS_ALL);
    const resData = await reqProductsPaths.json();

    const paths = resData.products.map(product => ({
        params: { 
            categoryTitle: product.category.title, 
            productName: product.name
        }
    }));

    return {
        paths,
        fallback: false
  };
}

export async function getStaticProps({ params: { categoryTitle, productName } }) {

    const reqProductByName = await fetch(`${process.env.NEXT_PUBLIC_LARAVEL_PRODUCT_BY_NAME}/${productName}`);
    const productData = await reqProductByName.json();


    return {
        props: {
            productData,
            categoryTitle
        },
        revalidate: 10800
    };
}