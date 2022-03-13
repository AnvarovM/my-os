/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle
import contextFactory from 'contexts/contextFactory';
import { initialProcessContextState } from 'contexts/initailContextState';
import type { ProcessContextState } from 'contexts/processes/useProcessContextState';
import useProcessContextState from 'contexts/processes/useProcessContextState';

const { Provider, Consumer, useContext } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export {
  Consumer as ProcessConsumer,
  Provider as ProcessProvider,
  useContext as useProcesses
};
