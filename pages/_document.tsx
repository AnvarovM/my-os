// eslint-disable-next-line simple-import-sort/imports
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, {
  Html, Head, Main, NextScript
} from 'next/document';
// eslint-disable-next-line import/no-unresolved
import { name } from 'package.json';
import { ReactElement } from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
          <title>{ name }</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
