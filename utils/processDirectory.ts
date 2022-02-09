/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-unresolved */
import dynamic from 'next/dynamic';
import type { Processes } from 'types/context/process';

const STARTUP_PROCESSES: string[] = ['Taskbar'];

export const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  },
  Taskbar: {
    Component: dynamic(() => import('components/system/Taskbar'))
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce((processes, processesId) => ({
    ...processes,
    [processesId]: processDirectory[processesId]
  }), {});
