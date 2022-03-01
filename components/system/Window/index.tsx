/* eslint-disable react/jsx-props-no-spreading */
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import useDraggable from 'hooks/useDraggable';
import useResizable from 'hooks/useResizable';
import { Rnd } from 'react-rnd';
import StyleWindow from 'styles/components/system/StyledWindow';
import rndDefaults from 'utils/rndDefaults';

const Window: React.FC<ProcessComponentProps> = ({ children, pid }) => {
  const {
    processes: {
      [pid]: { maximized, minimized }
    }
  } = useProcesses();

  const { x, y, updatePosition } = useDraggable(maximized);
  const { height, width, updateSize } = useResizable(maximized);

  return (
    <Rnd
      enableResizing={!maximized}
      size={{ height, width }}
      onDragStop={updatePosition}
      onResize={updateSize}
      position={{ x, y }}
      {...rndDefaults}
    >
      <StyleWindow minimized={minimized}>
        <Titlebar pid={pid} />
        {children}
      </StyleWindow>
    </Rnd>
  );
};

export default Window;
