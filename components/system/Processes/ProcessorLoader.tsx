import { ProcessConsumer } from 'contexts/process';

import { RenderProcesses } from './RenderProcesses';

const ProcessorLoader = () => (
  <ProcessConsumer>
    {({ processes }) => <RenderProcesses processes={processes} />}
  </ProcessConsumer>
);

export default ProcessorLoader;
