/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type Processes = {
  [pid: string]: Process;
};

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    title: 'Hello my friend'
  }
};
