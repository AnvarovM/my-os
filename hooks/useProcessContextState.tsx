/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-cycle */
import React, { useCallback } from 'react';
import type { ProcessContextState, Processes } from 'types/context/process';
import { closeProcess, openProcess } from 'utils/processFunctions';

const useProcessContextState = (): ProcessContextState => {
  const [processes, setProcesses] = React.useState<Processes>({});
  const close = useCallback((id: string) => setProcesses(closeProcess(id)), []);
  const open = useCallback((id: string) => setProcesses(openProcess(id)), []);

  return { close, open, processes };
};

export default useProcessContextState;
