import { useState } from 'react';
import type { ProcessContextState, Processes } from 'types/context/process';

const useContextContextState = (startupProcesses: Processes): ProcessContextState => {
  const [processes] = useState(startupProcesses);

  return { processes };
};

export default useContextContextState;
