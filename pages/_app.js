import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>TEST BOX</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
