/* eslint-disable import/no-unresolved */
import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApps';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <SessionProvider>
      <StyledApp>
        <Metadata />
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  );
};

export default MyApp;
