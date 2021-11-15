import Head from 'next/head';
import Layout from '../../../components/ui/global/Layout';
import ProductsGrid from '../../../components/ui/products/ProductsGrid';


function Category({resData}) {
  
  const { category, products } = resData;
  return (
    <Layout>
      <Head>
        <title>{category.title}</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="uppercase font-medium text-3xl my-8">
            {category.title}
        </h1>
      <ProductsGrid productsArray={products} />
    </Layout>
  );
}

export async function getStaticPaths() {

  const reqCategorties = await fetch(process.env.NEXT_PUBLIC_LARAVEL_CATEGORIES);
  const categoriesData = await reqCategorties.json();

  const paths = categoriesData.categories.map(category => ({
    params: { categoryTitle: category.title.toString() }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({params}) {

  const req = await fetch(`${process.env.NEXT_PUBLIC_LARAVEL_CATEGORY_NAME}/${params.categoryTitle}`);
  const resData = await req.json();

  if (!resData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      resData,
    },
    revalidate: 1
  };
}




export default Category;