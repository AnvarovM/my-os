import { RenderProcess } from 'components/system/Processes/RenderProcesses';
import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';
import type { Processes } from 'utils/processDirectory';

type RenderProcessesProps = {
  processes: Processes;
};

const ProcessorLoader: FC<RenderProcessesProps> = () => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, { Component, hasWindow }]) => (
        <RenderProcess key={id} Component={Component} hasWindow={hasWindow} />
      ))
    }
  </ProcessConsumer>
);

export default ProcessorLoader;
