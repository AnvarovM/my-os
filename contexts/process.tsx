/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import type { FC } from 'react';
import { createContext, useState } from 'react';
import type { Process } from 'types/utils/processDirectory';
import processDirectory from 'utils/processDirectory';

type ProcessContextState = {
    processes: Partial<Process>;
};

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

// eslint-disable-next-line react/function-component-definition
export const ProcessProvider: FC = ({ children }) => {
  const [processes] = useState(processDirectory);
  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
