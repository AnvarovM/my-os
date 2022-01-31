import Head from 'next/head';
import { ReactElement } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  border: 3px solid #232323;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5em;
`;

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
