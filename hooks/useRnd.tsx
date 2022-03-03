import { useSession } from 'contexts/session';
import useDraggable from 'hooks/useDraggable';
import useResizable from 'hooks/useResizable';
import { useCallback } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import type { Props, RndResizeCallback } from 'react-rnd';
import rndDefaults from 'utils/rndDefaults';

export type Size = NonNullable<Props['size']>;

const useRnd = (maximized = false, pid: string): Props => {
  const {
    windowStates: { [pid]: windowState }
  } = useSession();
  const { position: previousPosition, size: previousSize } = windowState || {};
  const [size, setSize] = useResizable(maximized, previousSize);
  const [position, setPosition] = useDraggable(maximized, previousPosition);

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
    enableResizing: !maximized,
    onDragStop,
    onResize,
    position,
    size,
    ...rndDefaults
  };
};

export default useRnd;
