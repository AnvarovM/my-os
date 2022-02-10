import dynamic from 'next/dynamic';
import type { Processes } from 'types/context/process';

const STARTUP_PROCESSES: string[] = ['Taskbar'];

export const processDirectory: Processes = {
  Taskbar: {
    Component: dynamic(() => import('components/system/Taskbar'))
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (processes, processesId) => ({
      ...processes,
      [processesId]: processDirectory[processesId]
    }),
    {}
  );
