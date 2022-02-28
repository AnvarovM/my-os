/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
import React, { useCallback } from 'react';
import type { Process, Processes } from 'utils/processDirectory';
import { closeProcess, openProcess } from 'utils/processFunctions';

type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type ProcessContextState = {
  close: (pid: string) => void;
  open: (pid: string) => void;
  mapProcesses: ProcessesMap;
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
  const open = useCallback((pid: string) => setProcesses(openProcess(pid)), []);

  return { close, open, mapProcesses };
};

export default useProcessContextState;
