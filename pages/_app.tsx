/* eslint-disable import/no-unresolved */
import StyledApp from 'components/pages/StyledApps';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { description, name } from 'package.json';
import type { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}

export default MyApp;
