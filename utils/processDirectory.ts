/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';
import type { Processes } from 'types/context/process';

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    title: 'Hello my friend'
  }
};
