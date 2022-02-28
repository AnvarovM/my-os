import { useProcesses } from 'contexts/process';
import useFileInfo from 'hooks/useFileInfo';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import StyleFileEntry from 'styles/components/system/Files/StyleFileEntry';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps) => {
  console.log('hello entry');
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onActivate = useCallback(() => open(pid), [open, pid]);

  return (
    <StyleFileEntry>
      <Button onClick={onActivate} onKeyDown={onActivate}>
        <figure>
          <img src={icon} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Button>
    </StyleFileEntry>
  );
};

export default FileEntry;
