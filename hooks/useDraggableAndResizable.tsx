import { useCallback, useState } from 'react';
import type { DraggableEventHandler } from 'react-draggable';
import type { Position, RndResizeCallback } from 'react-rnd';
import { useTheme } from 'styled-components';

type Draggable = Position & {
  updatePosition: DraggableEventHandler;
};

const defaultWindowPosition = {
  x: 0,
  y: 0
};

type Size = {
  height: string;
  width: string;
};

type Resizable = Size & {
  updateSize: RndResizeCallback;
};

type DraggableAndResizable = Resizable & Draggable;

const defaultWindowSize = {
  height: '400px',
  width: '600px'
};

const useDraggableAndResizable = (maximized = false): DraggableAndResizable => {
  const { sizes } = useTheme();
  const [{ width, height }, setSize] = useState<Size>(defaultWindowSize);
  const [{ x, y }, setPosition] = useState<Position>(defaultWindowPosition);
  const updatePosition = useCallback<DraggableEventHandler>(
    (_event, { x: positionX, y: positionY }) =>
      setPosition({ x: positionX, y: positionY }),
    []
  );
  const updateSize = useCallback<RndResizeCallback>(
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
    []
  );

  return {
    x: maximized ? 0 : x,
    y: maximized ? 0 : y,
    updatePosition,
    height: maximized ? `calc(100% - ${sizes.taskbar.height})` : height,
    width: maximized ? '100%' : width,
    updateSize
  };
};

export default useDraggableAndResizable;
