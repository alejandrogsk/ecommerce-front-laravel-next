import React from "react";
import Head from "next/head";
import Layout from "../../components/ui/global/Layout";

import axios from 'axios';

import SearchHome from '../../components/ui/search/SearchHome';

import ProductsGrid from "../../components/ui/products/ProductsGrid";

export async function getServerSideProps(context) {
  const { product } = context.query;

  const req = await axios.get(`${process.env.NEXT_PUBLIC_LARAVEL_PRODUCT_BY_SEARCH}/${product}`);
  const { data } = req;

  return {
    props: { data }, 
  }
}



const index = ({data}) => {
  const { ok, products, message } = data;

  return (
    <Layout>
      <Head>
        <title>Search</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-8">
      <SearchHome />
        Search Page

        {
          ( ok===false && message !==undefined ) &&
          <p className="text-red-500">{message}</p>
        }

        { products &&
          <ProductsGrid productsArray={products} />
        }
      </div>
    </Layout>
  );
};
export default index;
