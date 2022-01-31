import '../styles/globals.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';
// eslint-disable-next-line import/no-unresolved
import { description, name } from 'package.json';
import { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{ name }</title>
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
