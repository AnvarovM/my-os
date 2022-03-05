import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import dynamic from 'next/dynamic';

export type Process = {
  autoSizing?: boolean;
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  icon: string;
  maximized?: boolean;
  minimized?: boolean;
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
    title: 'Hello my friend? Hello my friend? Hello my friend?'
  }
};
