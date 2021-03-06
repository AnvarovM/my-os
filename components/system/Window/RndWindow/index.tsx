import useRnd from 'components/system/Window/RndWindow/useRnd';
import { useProcesses } from 'contexts/processes';
import { useSession } from 'contexts/session';
import { useEffect, useRef } from 'react';
import { Rnd } from 'react-rnd';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

type RndWindowProps = {
  children: React.ReactNode;
  pid: string;
  style: React.CSSProperties;
};

const RndWindow = ({ children, pid, style }: RndWindowProps): JSX.Element => {
  const {
    processes: {
      [pid]: { autoSizing, maximized }
    }
  } = useProcesses();
  const rndRef = useRef<Rnd | null>(null);
  const rndProps = useRnd(maximized, pid);
  const { setWindowStates } = useSession();

  useEffect(() => {
    const { current } = rndRef || {};

    return () =>
      setWindowStates((currentWindowStates) => ({
        ...currentWindowStates,
        [pid]: {
          position: current?.props?.position,
          size: autoSizing ? DEFAULT_WINDOW_SIZE : current?.props?.size
        }
      }));
  }, [autoSizing, pid, setWindowStates]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Rnd ref={rndRef} style={style} {...rndProps}>
      {children}
    </Rnd>
  );
};

export default RndWindow;
