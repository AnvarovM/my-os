import Head from 'next/head';
import type { ReactElement } from 'react';
import Title from 'styles/generic/Title';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Hi how are you?</Title>
    </div>
  );
}
