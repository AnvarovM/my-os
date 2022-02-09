/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { SessionContextState } from 'types/context/session';
import { initialSessionContextState } from 'utils/initailContextState';

// SessionContextState
const { Provider, Consumer } = createContext<SessionContextState>(
  initialSessionContextState
);

// eslint-disable-next-line react/function-component-definition
export const SessionProvider: FC = ({ children }) => (
  <Provider value={useSessionContextState()}>
    {children}
  </Provider>
);

export const SessionConsumer = Consumer;
