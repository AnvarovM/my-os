import type { ProcessContextState } from 'types/context/process';
import type { SessionContextState } from 'types/context/session';

/* eslint-disable import/prefer-default-export */
export const initailProcessContextState: ProcessContextState = { processes: {} };
export const initailSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
