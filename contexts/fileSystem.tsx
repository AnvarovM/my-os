import useFileSystemContextState from 'hooks/useFileSystemContextState';
import React from 'react';
import type { FileSystemContextState } from 'types/context/fileSystem';
import { initialFileSystemContextState } from 'utils/initailContextState';

// FileSystemContextState
const { Provider, Consumer } = React.createContext<FileSystemContextState>(
  initialFileSystemContextState
);

export const FileSystemProvider: React.FC = ({ children }) => (
  <Provider value={useFileSystemContextState()}>{children}</Provider>
);

export const FileSystemConsumer = Consumer;
