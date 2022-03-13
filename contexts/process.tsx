/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import contextFactory from 'contexts/contextFactory';
import type { ProcessContextState } from 'hooks/useProcessContextState';
import useProcessContextState from 'hooks/useProcessContextState';
import { initialProcessContextState } from 'utils/initailContextState';

const { Provider, Consumer, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
