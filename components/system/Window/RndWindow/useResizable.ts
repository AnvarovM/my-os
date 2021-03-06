import { stripUnit } from 'polished';
import { useEffect, useState } from 'react';
import type { Props } from 'react-rnd';
import { useTheme } from 'styled-components';
import { DEFAULT_WINDOW_SIZE } from 'utils/constants';

export type Size = NonNullable<Props['size']>;

type Resizable = [Size, React.Dispatch<React.SetStateAction<Size>>];

const useResizable = (
  maximized = false,
  autoSizing = false,
  size = DEFAULT_WINDOW_SIZE
): Resizable => {
  const [{ width, height }, setSize] = useState<Size>(size);
  const {
    sizes: { taskbar }
  } = useTheme();

  useEffect(() => {
    if (autoSizing) {
      setSize(size);
    }
  }, [autoSizing, size]);

  return [
    {
      height: maximized
        ? `${window.innerHeight - Number(stripUnit(taskbar.height))}px`
        : height,
      width: maximized ? '100%' : width
    },
    setSize
  ];
};

export default useResizable;
