import contextFactory from 'contexts/contextFactory';
import type { FileSystemContextState } from 'hooks/useFileSystemContextState';
import useFileSystemContextState from 'hooks/useFileSystemContextState';
import { initialFileSystemContextState } from 'utils/initailContextState';

const { Consumer, Provider, useContext } =
  contextFactory<FileSystemContextState>(
    initialFileSystemContextState,
    useFileSystemContextState
  );

export {
  Consumer as FileSystemConsumer,
  Provider as FileSystemProvider,
  useContext as useFileSystem
};
