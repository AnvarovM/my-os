import { AppProps } from "next/app";
import { ReactElement } from "react";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
