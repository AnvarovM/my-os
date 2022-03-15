/* eslint-disable import/no-cycle */
import FileManager from 'components/system/Files/FileManager';
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import { useProcesses } from 'contexts/processes';

const FileExplorer = ({ pid }: ProcessComponentProps): JSX.Element => {
  const {
    processes: {
      [pid]: { url }
    }
  } = useProcesses();

  return <FileManager directory={url || '/'} />;
};

export default FileExplorer;
