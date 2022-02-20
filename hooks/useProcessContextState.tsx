/* eslint-disable import/no-cycle */
import React from 'react';
import type { ProcessContextState, Processes } from 'types/context/process';
import { HelloWorld } from 'utils/processDirectory';
// import * as ProcessDirectory from 'utils/processDirectory';

// const closeProcess =
//   (processId: string) =>
//   ({ [processId]: _closeProcess, ...remainingProcesses }: Processes) =>
//     remainingProcesses;

// const openProcess = (processId: string) => (currentProcesses: Processes) =>
//   currentProcesses[processId]
//     ? currentProcesses
//     : { ...currentProcesses, processId: ProcessDirectory[processId] };

const useProcessContextState = (): ProcessContextState => {
  const [processes] = React.useState<Processes>({ HelloWorld });
  // const close = (processId: string) => setProcesses(closeProcess(processId));
  // const open = (processId: string) => setProcesses(openProcess(processId));

  return { processes };
};

export default useProcessContextState;
