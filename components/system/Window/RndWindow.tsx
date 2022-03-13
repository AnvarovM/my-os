/* eslint-disable react/jsx-props-no-spreading */
import { useProcesses } from 'contexts/processes';
import useSessionContextState from 'contexts/session/useSessionContextState';
import useRnd from 'hooks/useRnd';
import { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

type RndWindowProps = {
  children: React.ReactNode;
  pid: string;
};

const RndWindow = ({ children, pid }: RndWindowProps): JSX.Element => {
  const rndRef = useRef<Rnd | null>(null);
  const {
    processes: {
      [pid]: { autoSizing, maximized }
    }
  } = useProcesses();

  const rndProps = useRnd(maximized, pid);

  const { setWindowState } = useSessionContextState();
  useEffect(() => {
    const { current } = rndRef || {};

    return () =>
      setWindowState((currentWindowsState) => ({
        ...currentWindowsState,
        [pid]: {
          position: current?.props?.position,
          size: autoSizing ? DEFAULT_WINDOW_SIZE : current?.props?.size
        }
      }));
  }, [autoSizing, pid, setWindowState]);

  return (
    <Rnd ref={rndRef} {...rndProps}>
      {children}
    </Rnd>
  );
};

export default RndWindow;
