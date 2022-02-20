import { RenderProcesses } from 'components/system/Processes/RenderProcesses';
import { ProcessConsumer } from 'contexts/process';

const ProcessorLoader = () => (
  <ProcessConsumer>
    {({ processes }) => <RenderProcesses processes={processes} />}
  </ProcessConsumer>
);

export default ProcessorLoader;
