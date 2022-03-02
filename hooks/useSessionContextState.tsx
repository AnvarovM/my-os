/* eslint-disable import/no-unresolved */
import type { Size } from 'hooks/useDraggableAndResizable';
import { useState } from 'react';
import type { Position } from 'react-rnd';

type WindowState = {
  position?: Position;
  size?: Size;
};

type WindowStates = {
  [id: string]: WindowState;
};
export type SessionContextState = {
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  setWindowState: React.Dispatch<React.SetStateAction<WindowStates>>;
  themeName: string;
  windowState: WindowState;
};

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState('');
  const [windowState, setWindowState] = useState<WindowStates>({});

  return {
    themeName,
    setThemeName,
    setWindowState,
    windowState
  };
};

export default useSessionContextState;
