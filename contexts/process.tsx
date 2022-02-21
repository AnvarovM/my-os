// eslint-disable-next-line import/no-cycle
import contextFactory from 'contexts/contextFactory';
import useProcessContextState from 'hooks/useProcessContextState';
import type { ProcessContextState } from 'types/context/process';
import { initialProcessContextState } from 'utils/initailContextState';

const { Provider, Consumer, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcess
};
