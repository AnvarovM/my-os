/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';
import type { Process } from 'types/context/process';

// eslint-disable-next-line import/prefer-default-export
export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true,
  icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
  title: 'Hello again'
};
