import React from "react";
//Next
import Head from "next/head";
//Redux
import { useSelector } from "react-redux";

import Layout from "../../components/ui/global/Layout";
import CartProductsGrid from "../../components/ui/cart/cartProductsGrid";
import CartChecking from "../../components/ui/cart/cartChecking";

const index = () => {
  const { products } = useSelector((state) => state.cart);

  return (
    <Layout>
      <Head>
        <title>Cart</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row shadow-md my-10">
          <CartProductsGrid productsArr={products} />

          <CartChecking productsArr={products} />

         
        </div>
      </div>
    </Layout>
  );
};

export default index;
