/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
import Head from 'next/head';
import packageJson from 'package.json';
import type { FC } from 'react';

const { description, name } = packageJson;

const Metadata: FC = () => {
  return (
    <Head>
      <meta
        content="width=device-width, initial-scale=1, minimum-scale=1"
        name="viewport"
      />
      <meta content={description} name="description" />
      <title>{name}</title>
    </Head>
  );
};

export default Metadata;
