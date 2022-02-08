/* eslint-disable import/no-unresolved */
import dynamic from 'next/dynamic';
import type { Processes } from 'types/context/process';

const STARUP_PROCESSE: string[] = [
  'HelloWorld'
];

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  }
};

export const getStartupProcesses = (): Processes => STARUP_PROCESSE.reduce((acc, id) => ({
  ...acc,
  [id]: processDirectory[id]
}), {});
