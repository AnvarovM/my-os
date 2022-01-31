import '../styles/globals.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';
// eslint-disable-next-line import/no-unresolved
import { name } from 'package.json';
import { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{ name }</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
