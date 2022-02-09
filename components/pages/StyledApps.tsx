/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { SessionConsumer } from 'contexts/session';
import type { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes';

const StyledApp: FC = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ themeName }) => (
        <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;
