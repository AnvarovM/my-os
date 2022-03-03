/* eslint-disable react/jsx-props-no-spreading */
import { useProcesses } from 'contexts/process';
import useRnd from 'hooks/useRnd';
import useSessionContextState from 'hooks/useSessionContextState';
import { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';

type RndWindowProps = {
  children: React.ReactNode;
  pid: string;
};

const RndWindow = ({ children, pid }: RndWindowProps): JSX.Element => {
  const rndRef = useRef<Rnd | null>(null);
  const {
    processes: {
      [pid]: { maximized }
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
          size: current?.props?.size
        }
      }));
  }, [pid, setWindowState]);

  return (
    <Rnd ref={rndRef} {...rndProps}>
      {children}
    </Rnd>
  );
};

export default RndWindow;
