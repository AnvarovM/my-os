/* eslint-disable import/no-unresolved */
import { useFileSystem } from 'contexts/fileSystem';
import type { Size } from 'hooks/useRnd';
import { useEffect, useState } from 'react';
import type { Position } from 'react-rnd';

const SESSION_FILE = '/session.json';

type WindowState = {
  position?: Position;
  size?: Size;
};

type WindowStates = {
  [id: string]: WindowState;
};

export type SessionContextState = {
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
  setWindowStates: React.Dispatch<React.SetStateAction<WindowStates>>;
  themeName: string;
  windowStates: WindowStates;
};

const useSessionContextState = (): SessionContextState => {
  const { fs } = useFileSystem();
  const [sessionLoaded, setSessionLoaded] = useState(false);
  const [themeName, setThemeName] = useState('');
  const [windowStates, setWindowStates] = useState<WindowStates>({});

  useEffect(() => {
    if (sessionLoaded) {
      fs?.writeFile(
        SESSION_FILE,
        JSON.stringify({
          themeName,
          windowStates
        })
      );
    }
  }, [fs, sessionLoaded, themeName, windowStates]);

  useEffect(
    () =>
      fs?.readFile(SESSION_FILE, (_error, contents) => {
        if (contents) {
          const session = JSON.parse(contents.toString());

          setThemeName(session.themeName);
          setWindowStates(session.windowStates);
        }

        setSessionLoaded(true);
      }),
    [fs]
  );

  return { setThemeName, setWindowStates, themeName, windowStates };
};

export default useSessionContextState;
