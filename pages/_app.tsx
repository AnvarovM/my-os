/* eslint-disable import/no-unresolved */
import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApps';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Metadata />
      <SessionProvider>
        <StyledApp>
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </>
  );
}

export default MyApp;
