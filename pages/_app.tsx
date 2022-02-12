import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApps';
import { FileSystemProvider } from 'contexts/fileSystem';
import { SessionProvider } from 'contexts/session';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <FileSystemProvider>
      <SessionProvider>
        <StyledApp>
          <Metadata />
          <Component {...pageProps} />
        </StyledApp>
      </SessionProvider>
    </FileSystemProvider>
  );
};

export default MyApp;
