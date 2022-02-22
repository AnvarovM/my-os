import type { FSModule } from 'browserfs/dist/node/core/FS';
import ini from 'ini';

type Shortcut = {
  URL: string;
  IconFile: string;
};

/* eslint-disable import/prefer-default-export */
export const getShortcut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve) => {
    fs.readFile(path, (_error, contents = Buffer.from('')) => {
      const { InternetShortcut } = ini.parse(contents.toString());
      if (InternetShortcut) {
        resolve(InternetShortcut);
      }
    });
  });

export const getProcessByFileExtension = (_extension: string): string => '';
