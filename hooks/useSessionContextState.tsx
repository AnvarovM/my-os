/* eslint-disable import/no-unresolved */
import { useState } from 'react';
import type { SessionContextState } from 'types/context/session';
// import processDirectory from 'utils/processDirectory';

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');

  return {
    themeName,
    setThemeName
  };
};

export default useSessionContextState;
