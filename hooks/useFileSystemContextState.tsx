/* eslint-disable no-console */
import * as BrowserFS from 'browserfs';
import type { FSModule } from 'browserfs/dist/node/core/FS';
import React, { useEffect } from 'react';
import type { FileSystemContextState } from 'types/context/fileSystem';

const useFileSystemContextState = (): FileSystemContextState => {
  const [fs, setFs] = React.useState<FSModule | null>(null);

  useEffect(() => {
    BrowserFS.install(window);
    if (!('BrowserFS' in window)) {
      console.log('hello');
      BrowserFS.configure(
        {
          fs: 'IndexDB'
        },
        () => {
          setFs(BrowserFS.BFSRequire('fs'));
        }
      );
    }
  }, [setFs]);

  return { fs };
};

export default useFileSystemContextState;
