/* eslint-disable @typescript-eslint/no-explicit-any */
import { useProcesses } from 'contexts/process';
import StyleWindow from 'styles/components/system/StyledWindow';

import type { ProcessComponentProps } from './Processes/RenderProcesses';

const Window: React.FC<ProcessComponentProps> = ({ children, pid }) => {
  const {
    processes: {
      [pid]: { minimized }
    }
  } = useProcesses();
  return (
    <div>
      <StyleWindow minimized={minimized}>{children}</StyleWindow>
    </div>
  );
};

export default Window;
