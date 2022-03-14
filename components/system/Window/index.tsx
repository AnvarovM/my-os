/* eslint-disable react/jsx-props-no-spreading */
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import RndWindow from 'components/system/Window/RndWindow';
import Titlebar from 'components/system/Window/Titlebar';
import useFocusable from 'components/system/Window/useFocusable';
import { useProcesses } from 'contexts/processes';
import { useRef } from 'react';
import StyleWindow from 'styles/components/system/StyledWindow';

type WindowProps = ProcessComponentProps & {
  children: React.ReactNode;
};

const Window = ({ children, pid }: WindowProps): JSX.Element => {
  const windowRef = useRef<HTMLElement | null>(null);
  const { zIndex, ...focusableProps } = useFocusable(pid, windowRef);
  const {
    processes: {
      [pid]: { backgroundColor, minimized }
    }
  } = useProcesses();

  return (
    <RndWindow pid={pid} style={{ zIndex }}>
      <StyleWindow
        minimized={minimized}
        ref={windowRef}
        style={{ backgroundColor }}
        {...focusableProps}
      >
        <Titlebar pid={pid} />
        {children}
      </StyleWindow>
    </RndWindow>
  );
};

export default Window;
