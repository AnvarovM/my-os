import contextFactory from 'contexts/contextFactory';
import { initialSessionContextState } from 'contexts/initailContextState';
import type { SessionContextState } from 'contexts/session/useSessionContextState';
import useSessionContextState from 'contexts/session/useSessionContextState';

// SessionContextState
const { Provider, Consumer, useContext } = contextFactory<SessionContextState>(
  initialSessionContextState,
  useSessionContextState
);

export {
  Consumer as SessionConsumer,
  Provider as SessionProvider,
  useContext as useSession
};
