import React from 'react';
import type { ProcessContextState, Processes } from 'types/context/process';

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = React.useState<Processes>(startupProcesses);

  return { processes };
};

export default useProcessContextState;
