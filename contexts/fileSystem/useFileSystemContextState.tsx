/* eslint-disable no-console */
import * as BrowserFS from 'browserfs';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import fileSystemConfig from 'contexts/fileSystem/fileSystemConfig';
import React, { useEffect } from 'react';

export type FileSystemContextState = {
  fs: FSModule | null;
};

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = React.useState<FSModule | null>(null);

  useEffect(() => {
    if (!fs) {
      BrowserFS.configure(fileSystemConfig, () =>
        setFs(BrowserFS.BFSRequire('fs'))
      );
    }
  }, [fs]);

  return { fs };
};

export default useFileSystemContextState;
