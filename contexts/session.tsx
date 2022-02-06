/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { SessionContextState } from 'types/context/session';

// SessionContextState
const SessionContext = createContext<SessionContextState>({ theme: undefined });

// eslint-disable-next-line react/function-component-definition
export const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
