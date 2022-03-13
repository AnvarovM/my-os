import { RenderProcess } from 'components/system/Processes/RenderProcesses';
import { ProcessConsumer } from 'contexts/processes';
import type { Processes } from 'contexts/processes/directory';
import type { FC } from 'react';

type RenderProcessesProps = {
  processes: Processes;
};

const ProcessorLoader: FC<RenderProcessesProps> = () => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, { Component, hasWindow }]) => (
        <RenderProcess
          key={id}
          Component={Component}
          hasWindow={hasWindow}
          pid={id}
        />
      ))
    }
  </ProcessConsumer>
);

export default ProcessorLoader;
