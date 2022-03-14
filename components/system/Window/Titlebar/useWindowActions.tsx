import useNextFocusable from 'components/system/Window/useNextFocusable';
import { useProcesses } from 'contexts/processes';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';

type WindowActions = {
  onClose: React.MouseEventHandler;
  onMaximize: React.MouseEventHandler;
  onMinimize: React.MouseEventHandler;
};

const useWindowActions = (pid: string): WindowActions => {
  const nextFocusableId = useNextFocusable(pid);
  const { setForegroundId, setStackOrder } = useSession();
  const { close, maximized, minimized } = useProcesses();
  const onMinimize = useCallback(() => {
    minimized(pid);
    setForegroundId(nextFocusableId);
  }, [pid, minimized, nextFocusableId, setForegroundId]);
  const onMaximize = useCallback(() => maximized(pid), [pid, maximized]);
  const onClose = useCallback(() => {
    setStackOrder((currentStackOrder) =>
      currentStackOrder.filter((stackId) => stackId !== pid)
    );
    close(pid);
    setForegroundId(nextFocusableId);
  }, [setStackOrder, close, pid, setForegroundId, nextFocusableId]);

  return { onClose, onMaximize, onMinimize };
};

export default useWindowActions;
