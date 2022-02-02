/* eslint-disable import/no-unresolved */
import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApps';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata />
      <StyledApp>
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}

export default MyApp;
