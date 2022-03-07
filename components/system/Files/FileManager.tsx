/* eslint-disable react/jsx-props-no-spreading */
import FileEntry from 'components/system/Files/FileEntry';
import useFileDrop from 'hooks/useFileDrop';
import useFiles from 'hooks/useFiles';
import { basename, extname, resolve } from 'path';
import StyleFileManager from 'styles/components/system/Files/StyleFileManager';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => {
  const { files, getFiles } = useFiles(directory);
  return (
    <StyleFileManager {...useFileDrop(directory, getFiles)}>
      {files.map((file) => (
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
