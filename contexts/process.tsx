// eslint-disable-next-line import/no-cycle
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
  children
}) => <Provider value={useProcessContextState()}>{children}</Provider>;

export const ProcessConsumer = Consumer;
