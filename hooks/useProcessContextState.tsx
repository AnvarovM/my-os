/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
import React, { useCallback } from 'react';
import type { Process, Processes } from 'utils/processDirectory';
import {
  closeProcess,
  maximizeProcess,
  minimizeProcess,
  openProcess
} from 'utils/processFunctions';

type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (pid: string) => void;
  open: (pid: string) => void;
  mapProcesses: ProcessesMap;
  maximize: (pid: string) => void;
  minimize: (pid: string) => void;
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
  const maximize = useCallback(
    (pid: string) => setProcesses(maximizeProcess(pid)),
    []
  );
  const minimize = useCallback(
    (pid: string) => setProcesses(minimizeProcess(pid)),
    []
  );
  const open = useCallback((pid: string) => setProcesses(openProcess(pid)), []);

  return { close, open, mapProcesses, maximize, minimize, };
};

export default useProcessContextState;
