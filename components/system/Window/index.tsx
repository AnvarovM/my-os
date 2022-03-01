/* eslint-disable react/jsx-props-no-spreading */
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import useResizable from 'hooks/useResizable';
import { Rnd } from 'react-rnd';
import StyleWindow from 'styles/components/system/StyledWindow';
import rndDefaults from 'utils/rndDefaults';

import type { ProcessComponentProps } from '../Processes/RenderProcesses';

const Window: React.FC<ProcessComponentProps> = ({ children, pid }) => {
  const {
    processes: {
      [pid]: { maximized, minimized }
    }
  } = useProcesses();

  const { height, width, updateSize } = useResizable(maximized);
  return (
    <Rnd
      enableResizing={!maximized}
      size={{ height, width }}
      onResizeStop={updateSize}
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
