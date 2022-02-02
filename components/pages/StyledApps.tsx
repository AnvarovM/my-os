/* eslint-disable import/no-unresolved */
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import themes from 'styles/themes.json';
import type { StyledAppProps } from 'types/components/pages/StyledApp';

function StyledApp({ children }: StyledAppProps): JSX.Element {
    return (
        <ThemeProvider theme={themes.default}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}

export default StyledApp;
