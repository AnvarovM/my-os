/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import useContextContextState from 'hooks/useContextContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { ProcessContextState } from 'types/context/process';
import processDirectory from 'utils/processDirectory';

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

// eslint-disable-next-line react/function-component-definition
export const ProcessProvider: FC = ({ children }) => (
  <ProcessContext.Provider value={useContextContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
