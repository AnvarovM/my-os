/* eslint-disable react/jsx-props-no-spreading */
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import useDraggableAndResizable from 'hooks/useDraggableAndResizable';
import { Rnd } from 'react-rnd';
import StyleWindow from 'styles/components/system/StyledWindow';
import rndDefaults from 'utils/rndDefaults';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, pid }: WindowProps): JSX.Element => {
  const {
    processes: {
      [pid]: { maximized, minimized }
    }
  } = useProcesses();

  const { height, width, updateSize, x, y, updatePosition } =
    useDraggableAndResizable(maximized);

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
