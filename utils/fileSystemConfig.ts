import type { FileSystemConfiguration } from 'browserfs';
import publicFileSystemIndex from 'public.json';

const fileSystemConfig: FileSystemConfiguration = {
  fs: 'OverlayFS',
  options: {
    readable: {
      fs: 'XmlHttpRequest',
      options: {
        index: publicFileSystemIndex
      }
    },
    writable: {
      fs: 'IndexDB',
      options: {
        storeName: 'browser-fs-cashe'
      }
    }
  }
};

export default fileSystemConfig;
