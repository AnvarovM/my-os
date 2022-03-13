/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
import type { Process, Processes } from 'contexts/processes/directory';
import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess
} from 'contexts/processes/functions';
import React, { useCallback } from 'react';

type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (pid: string) => void;
  open: (pid: string, url: string) => void;
  mapProcesses: ProcessesMap;
  maximized: (pid: string) => void;
  minimized: (pid: string) => void;
  processes: Processes;
};

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = React.useState<Processes>({});
  const mapProcesses = useCallback<ProcessesMap>(
    (callback) => Object.entries(processes).map(callback),
    [processes]
  );
  const close = useCallback(
    (pid: string) => setProcesses(closeProcess(pid)),
    []
  );
  const maximized = useCallback(
    (pid: string) => setProcesses(maximizeProcess(pid)),
    []
  );
  const minimized = useCallback(
    (pid: string) => setProcesses(minimizeProcess(pid)),
    []
  );
  const open = useCallback(
    (pid: string, url: string) => setProcesses(openProcess(pid, url)),
    []
  );

  return { close, open, mapProcesses, maximized, minimized, processes };
};

export default useProcessContextState;
