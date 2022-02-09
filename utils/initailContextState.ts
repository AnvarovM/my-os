import type { ProcessContextState } from 'types/context/process';
import type { SessionContextState } from 'types/context/session';

/* eslint-disable import/prefer-default-export */
export const initialProcessContextState: ProcessContextState = { processes: {} };
export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
