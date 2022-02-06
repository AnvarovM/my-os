/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { SessionConsumer } from 'contexts/session';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import type { StyledAppProps } from 'types/components/pages/StyledApp';

function StyledApp({ children }: StyledAppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <SessionConsumer>
        {({ theme }) => (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        )}
      </SessionConsumer>
    </>
  );
}

export default StyledApp;
