import Desktop from 'components/system/Desktop';
import FileManager from 'components/system/Files/FileManager';
import ProcessorLoader from 'components/system/Processes/ProcessorLoader';
import Taskbar from 'components/system/Taskbar';
import { ProcessProvider } from 'contexts/processes';
import type { FC } from 'react';

const Home: FC = () => {
  return (
    <Desktop>
      <ProcessProvider>
        <FileManager directory="/desktop" />
        <Taskbar />
        <ProcessorLoader processes={{}} />
      </ProcessProvider>
    </Desktop>
  );
};

export default Home;
