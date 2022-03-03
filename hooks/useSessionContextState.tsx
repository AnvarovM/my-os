/* eslint-disable import/no-unresolved */
import type { Size } from 'hooks/useRnd';
import { useState } from 'react';
import type { Position } from 'react-rnd';

type WindowState = {
  position?: Position;
  size?: Size;
};

type WindowStates = {
  [pid: string]: WindowState;
};

export type SessionContextState = {
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  setWindowState: React.Dispatch<React.SetStateAction<WindowStates>>;
  themeName: string;
  windowStates: WindowStates;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowState] = useState<WindowStates>({});

  return {
    themeName,
    setThemeName,
    setWindowState,
    windowStates
  };
};

export default useSessionContextState;
