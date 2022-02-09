/* eslint-disable import/no-unresolved */
import Desktop from 'components/system/Desktop';
import ProcessorLoader from 'components/system/ProcessorLoader';
import { ProcessProvider } from 'contexts/process';
import { getStartupProcesses } from 'utils/processDirectory';

export default function Home(): React.ReactElement {
  return (
    <Desktop>
      <ProcessProvider startupProcesses={getStartupProcesses()}>
        <ProcessorLoader />
      </ProcessProvider>
    </Desktop>
  );
}
