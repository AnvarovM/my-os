/* eslint-disable no-console */
import { BFSRequire, configure } from 'browserfs';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import React, { useEffect } from 'react';
import type { FileSystemContextState } from 'types/context/fileSystem';
import fileSystemConfig from 'utils/fileSystemConfig';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = React.useState<FSModule | null>(null);

  useEffect(() => {
    if (!fs) {
      configure(fileSystemConfig, () => setFs(BFSRequire('fs')));
    }
  }, [fs]);

  return { fs };
};

export default useFileSystemContextState;
