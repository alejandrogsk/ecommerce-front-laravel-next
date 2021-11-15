import Head from 'next/head'
import Layout from '../components/ui/global/Layout';
import HomeTop from '../components/ui/home/HomeTop';
import HomeCenter from '../components/ui/home/HomeCenter';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ecommerce</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
 

        <HomeTop />
        <HomeCenter />
      </main>

    </Layout>
  )
}
