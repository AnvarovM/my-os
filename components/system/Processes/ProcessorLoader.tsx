import { RenderProcess } from 'components/system/Processes/RenderProcesses';
import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';
import type { Processes } from 'types/context/process';

type RenderProcessesProps = {
  processes: Processes;
};

const ProcessorLoader: FC<RenderProcessesProps> = () => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, process]) => <RenderProcess key={id} {...process} />)
    }
  </ProcessConsumer>
);

export default ProcessorLoader;
