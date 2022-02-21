/* eslint-disable no-console */
import Desktop from 'components/system/Desktop';
import ProcessorLoader from 'components/system/Processes/ProcessorLoader';
import Taskbar from 'components/system/Taskbar';
import { ProcessProvider } from 'contexts/process';
import type { FC } from 'react';

const Home: FC = () => {
  return (
    <Desktop>
      <ProcessProvider>
        <Taskbar />
        <ProcessorLoader processes={{}} />
      </ProcessProvider>
    </Desktop>
  );
};

export default Home;
