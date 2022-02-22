import FileEntry from 'components/system/Files/FileEntry';
import Test from 'components/system/Files/Test';
import useFiles from 'hooks/useFiles';
import { basename, extname, resolve } from 'path';
import StyleFileManager from 'styles/components/system/Files/StyleFileManager';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => {
  console.log('hello manger');
  return (
    <StyleFileManager>
      {useFiles(directory, (file) => (
        <FileEntry
          key={file}
          name={basename(file, extname(file))}
          path={resolve(directory, file)}
        />
      ))}
      <Test />
    </StyleFileManager>
  );
};

export default FileManager;
