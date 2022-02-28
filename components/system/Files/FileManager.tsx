import FileEntry from 'components/system/Files/FileEntry';
import useFiles from 'hooks/useFiles';
import { basename, extname, resolve } from 'path';
import StyleFileManager from 'styles/components/system/Files/StyleFileManager';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => {
  return (
    <StyleFileManager>
      {useFiles(directory, (file) => (
        <FileEntry
          key={file}
          name={basename(file, extname(file))}
          path={resolve(directory, file)}
        />
      ))}
    </StyleFileManager>
  );
};

export default FileManager;
