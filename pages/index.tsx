/* eslint-disable import/no-unresolved */
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';

const DynamicComponent = dynamic(() => import('components/apps/HelloWorld'));

export default function Home(): ReactElement {
  return (
    <DynamicComponent />
  );
}
