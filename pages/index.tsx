/* eslint-disable no-console */
import Desktop from 'components/system/Desktop';
import ProcessorLoader from 'components/system/Processes/ProcessorLoader';
import { ProcessProvider } from 'contexts/process';
import type { FC } from 'react';
import { getStartupProcesses } from 'utils/processDirectory';

const Home: FC = () => {
  return (
    <Desktop>
      <ProcessProvider startupProcesses={getStartupProcesses()}>
        <ProcessorLoader />
      </ProcessProvider>
    </Desktop>
  );
};

export default Home;
