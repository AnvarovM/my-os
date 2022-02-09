/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import useContextContextState from 'hooks/useContextContextState';
import React from 'react';
import type { ProcessContextState, ProcessProviderProps } from 'types/context/process';
import { initialProcessContextState } from 'utils/initailContextState';

const { Provider, Consumer } = React.createContext<ProcessContextState>(
  initialProcessContextState
);

// eslint-disable-next-line react/function-component-definition
export const ProcessProvider: React.FC<ProcessProviderProps> = ({ children, startupProcesses }) => (
  <Provider value={useContextContextState(startupProcesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
