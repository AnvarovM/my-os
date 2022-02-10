import useProcessContextState from 'hooks/useProcessContextState';
import React from 'react';
import type {
  ProcessContextState,
  ProcessProviderProps
} from 'types/context/process';
import { initialProcessContextState } from 'utils/initailContextState';

const { Provider, Consumer } = React.createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: React.FC<ProcessProviderProps> = ({
  children,
  startupProcesses
}) => (
  <Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
