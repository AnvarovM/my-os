import rndDefaults from 'components/system/Window/RndWindow/rndDefaults';
import useDraggable from 'components/system/Window/RndWindow/useDraggable';
import useResizable from 'components/system/Window/RndWindow/useResizable';
import { useProcesses } from 'contexts/processes';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import type { Props, RndResizeCallback } from 'react-rnd';

export type Size = NonNullable<Props['size']>;

const useRnd = (maximized = false, pid: string): Props => {
  const {
    processes: {
      [pid]: { autoSizing }
    }
  } = useProcesses();
  const {
    windowStates: { [pid]: windowState }
  } = useSession();
  const { position: statePosition, size: stateSize } = windowState || {};
  const [size, setSize] = useResizable(autoSizing, maximized, stateSize);
  const [position, setPosition] = useDraggable(maximized, statePosition);

  const onDragStop = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    [setPosition]
  );
  const onResize = useCallback<RndResizeCallback>(
    (
      _event,
      _direction,
      { style: { height: elementHeight, width: elementWidth } },
      _delta,
      { x: positionX, y: positionY }
    ) => {
      setSize({ height: elementHeight, width: elementWidth });
      setPosition({ x: positionX, y: positionY });
    },
    [setPosition, setSize]
  );

  return {
    disableDragging: maximized,
    enableResizing: !maximized && !autoSizing,
    onDragStop,
    onResize,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
