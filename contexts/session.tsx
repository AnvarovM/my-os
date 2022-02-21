import contextFactory from 'contexts/contextFactory';
import useSessionContextState from 'hooks/useSessionContextState';
import type { SessionContextState } from 'types/context/session';
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
