/* eslint-disable no-shadow */
import { useProcesses } from 'contexts/process';
import useDoubleClick from 'hooks/useDoubleClick';
import useFileInfo from 'hooks/useFileInfo';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import StyleFileEntry from 'styles/components/system/Files/StyleFileEntry';

type FileEntryProps = {
  name: string;
  path: string;
};

const FileEntry = ({ name, path }: FileEntryProps) => {
  const { icon, pid } = useFileInfo(path);
  const { open } = useProcesses();
  const onClick = useCallback(() => open(pid), [open, pid]);

  return (
    <StyleFileEntry>
      <Button onClick={useDoubleClick(onClick)} onKeyDown={onClick}>
        <figure>
          <img src={icon} alt={name} />
          <figcaption>{name}</figcaption>
        </figure>
      </Button>
    </StyleFileEntry>
  );
};

export default FileEntry;
