/* eslint-disable no-shadow */
import { useProcesses } from 'contexts/process';
import useFileInfo from 'hooks/useFileInfo';
import { useCallback, useRef } from 'react';
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

  type DoubleClick = (
    handler: React.MouseEventHandler,
    timeout?: number
  ) => React.MouseEventHandler;

  const useDoubleClick: DoubleClick = (handler, timeout = 1000) => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const onClick = useCallback<React.MouseEventHandler>(
      (event) => {
        if (!timer.current) {
          timer.current = setTimeout(() => {
            timer.current = null;
          }, timeout);
        } else {
          clearTimeout(timer.current);
          handler(event);
          timer.current = null;
        }
      },
      [handler, timeout]
    );
    return onClick;
  };

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
