/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import useProcessContextState from 'hooks/useProcessContextState';
import React from 'react';
import type { ProcessContextState, ProcessProviderProps } from 'types/context/process';
import { initialProcessContextState } from 'utils/initailContextState';

const { Provider, Consumer } = React.createContext<ProcessContextState>(
  initialProcessContextState
);

// eslint-disable-next-line react/function-component-definition
export const ProcessProvider: React.FC<ProcessProviderProps> = ({ children, startupProcesses }) => (
  <Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
