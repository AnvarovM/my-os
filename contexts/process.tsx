/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import useContextContextState from 'hooks/useContextContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { ProcessContextState, ProcessProviderProps } from 'types/context/process';
import { initailProcessContextState } from 'utils/initailContextState';

const { Provider, Consumer } = createContext<ProcessContextState>(
  initailProcessContextState
);

// eslint-disable-next-line react/function-component-definition
export const ProcessProvider: FC<ProcessProviderProps> = ({ children, startupProccesses }) => (
  <Provider value={useContextContextState(startupProccesses)}>
    {children}
  </Provider>
);

export const ProcessConsumer = Consumer;
