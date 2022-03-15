import {
  bufferToUrl,
  getIconByFileExtension,
  getProcessByFileExtension
} from 'components/system/Files/FileEntry/functions';
import { useFileSystem } from 'contexts/fileSystem';
import ini from 'ini';
import { extname } from 'path';
import { useEffect, useState } from 'react';
import { IMAGE_FILE_EXTENSION } from 'utils/constants';

type FileInfo = {
  icon: string;
  pid: string;
  url: string;
};

const useFileInfo = (path: string): FileInfo => {
  const [info, setInfo] = useState<FileInfo>({
    icon: '',
    pid: '',
    url: ''
  });
  const { fs } = useFileSystem();

  useEffect(() => {
    if (fs) {
      const extension = extname(path);
      const getInfoByFileExtension = (icon?: string) =>
        setInfo({
          icon: icon || getIconByFileExtension(extension),
          pid: getProcessByFileExtension(extension),
          url: path
        });

      if (extension === '.url') {
        fs.readFile(path, (error, contents = Buffer.from('')) => {
          if (error) {
            getInfoByFileExtension();
          } else {
            const {
              InternetShortcut: {
                BASEURL: pid = '',
                IconFile: icon = '',
                URL: url = ''
              }
            } = ini.parse(contents.toString());
            setInfo({ icon, pid, url });
          }
        });
      } else if (IMAGE_FILE_EXTENSION.includes(extension)) {
        fs.readFile(path, (error, contents = Buffer.from('')) =>
          getInfoByFileExtension(
            error ? '/icons/photo.png' : bufferToUrl(contents)
          )
        );
      } else {
        getInfoByFileExtension();
      }
    }
  }, [fs, path]);

  return info;
};

export default useFileInfo;
