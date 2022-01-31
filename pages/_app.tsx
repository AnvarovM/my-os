import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
// eslint-disable-next-line import/no-unresolved
import { description, name } from 'package.json';
import type { ReactElement } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyle, ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import defaultTheme from 'themes/default.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
