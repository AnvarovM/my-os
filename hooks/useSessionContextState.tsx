/* eslint-disable import/no-unresolved */
import themes from 'styles/themes.json';
import type { SessionContextState } from 'types/context/session';
// import processDirectory from 'utils/processDirectory';

const useSessionContextState = (): SessionContextState => ({
  theme: themes.default
});

export default useSessionContextState;
