/* eslint-disable react/jsx-props-no-spreading */
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import RndWindow from 'components/system/Window/RndWindow';
import Titlebar from 'components/system/Window/Titlebar';
import { useProcesses } from 'contexts/process';
import StyleWindow from 'styles/components/system/StyledWindow';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, pid }: WindowProps): JSX.Element => {
  const {
    processes: {
      [pid]: { minimized }
    }
  } = useProcesses();

  return (
    <RndWindow pid={pid}>
      <StyleWindow minimized={minimized}>
        <Titlebar pid={pid} />
        {children}
      </StyleWindow>
    </RndWindow>
  );
};

export default Window;
