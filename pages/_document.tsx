import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
// eslint-disable-next-line import/no-unresolved
import withStyledComponents from 'utils/withServerStyleSheet';
// eslint-disable-next-line import/no-unresolved
// import { DEFAULT_LOCALE } from 'utils/constants';

class MyDocument extends Document {
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    return withStyledComponents(ctx);
  }

  // eslint-disable-next-line no-undef
  public render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
