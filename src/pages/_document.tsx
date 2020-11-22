import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="dns-prefetch" href="//www.google.co.jp" /> 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => sheets.collectStyles(<App {...props} />),
  })

  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps, 
    styles: (
      <>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </>
    )
  }
};