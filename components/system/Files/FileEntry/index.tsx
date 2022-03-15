/* eslint-disable no-shadow */
import useFileInfo from 'components/system/Files/FileEntry/useFileInfo';
import useDoubleClick from 'components/system/useDoubleClick';
import { useProcesses } from 'contexts/processes';
import { createPid } from 'contexts/processes/functions';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps) => {
  const { icon, pid, url } = useFileInfo(path);
  const { setForegroundId } = useSession();
  const { minimized, open, processes } = useProcesses();
  const onClick = useCallback(() => {
    const id = createPid(pid, url);

    if (processes[id]) {
      if (processes[id].minimized) minimized(id);
      setForegroundId(id);
    } else {
      open(pid, url);
    }
  }, [minimized, open, pid, processes, setForegroundId, url]);

  return (
    <Button onClick={useDoubleClick(onClick)} onKeyDown={onClick}>
      <figure>
        <Image src={icon} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </Button>
  );
};

export default FileEntry;
