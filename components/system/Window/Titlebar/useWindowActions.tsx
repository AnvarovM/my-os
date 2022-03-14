import { useProcesses } from 'contexts/processes';
import { useCallback } from 'react';

type WindowActions = {
  onClose: React.MouseEventHandler;
  onMaximize: React.MouseEventHandler;
  onMinimize: React.MouseEventHandler;
};

const useWindowActions = (pid: string): WindowActions => {
  const { close, maximized, minimized } = useProcesses();
  const onMinimize = useCallback(() => minimized(pid), [pid, minimized]);
  const onMaximize = useCallback(() => maximized(pid), [pid, maximized]);
  const onClose = useCallback(() => close(pid), [pid, close]);

  return { onClose, onMaximize, onMinimize };
};

export default useWindowActions;
