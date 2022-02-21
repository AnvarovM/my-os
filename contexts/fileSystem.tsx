import contextFactory from 'contexts/contextFactory';
import useFileSystemContextState from 'hooks/useFileSystemContextState';
import type { FileSystemContextState } from 'types/context/fileSystem';
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
