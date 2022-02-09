import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primary: string;
      window: string;
    };
  }
}
