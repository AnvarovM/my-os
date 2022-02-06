/* eslint-disable import/no-unresolved */
import dynamic from 'next/dynamic';
import type { Processes } from 'types/context/process';

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  }
};

export default processDirectory;
