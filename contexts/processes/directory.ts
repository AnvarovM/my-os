/* eslint-disable import/no-cycle */
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import dynamic from 'next/dynamic';

export type Process = {
  autoSizing?: boolean;
  backgroundColor?: string;
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
  title: string;
  url?: string;
};

export type Processes = {
  [pid: string]: Process;
};

export const processDirectory: Processes = {
  HelloWorld: {
    autoSizing: false,
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true,
    icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    title: 'Hello my friend? Hello my friend? Hello my friend?'
  },
  JSDOS: {
    autoSizing: true,
    backgroundColor: '#000',
    Component: dynamic(() => import('components/apps/JSDOS')),
    hasWindow: true,
    icon: '/icons/jsdos.png',
    title: 'JS-DOS'
  },
  V86: {
    autoSizing: false,
    backgroundColor: '#000',
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/icons/v86.png',
    title: 'v86'
  }
};
