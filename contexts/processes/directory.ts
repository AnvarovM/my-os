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
  V86: {
    autoSizing: false,
    backgroundColor: '#000',
    Component: dynamic(() => import('components/apps/V86')),
    hasWindow: true,
    icon: '/icons/v86.png',
    title: 'V86'
  },
  Test: {
    autoSizing: false,
    Component: dynamic(() => import('components/apps/Test')),
    hasWindow: true,
    icon: '/images/unknown.png',
    title: 'This is for testing'
  }
};
