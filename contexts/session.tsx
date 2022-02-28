import contextFactory from 'contexts/contextFactory';
import type { SessionContextState } from 'hooks/useSessionContextState';
import useSessionContextState from 'hooks/useSessionContextState';
import { initialSessionContextState } from 'utils/initailContextState';

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
