import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
//import '../styles/globals.css';
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>Card Creator</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
