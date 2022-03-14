/* eslint-disable react/jsx-props-no-spreading */
import FileEntry from 'components/system/Files/FileEntry';
import useFileDrop from 'hooks/useFileDrop';
import useFiles from 'hooks/useFiles';
import { basename, extname, resolve } from 'path';
import StyledFileEntry from 'styles/components/system/Files/StyleFileEntry';
import StyleFileManager from 'styles/components/system/Files/StyleFileManager';

type FileManagerProps = {
  directory: string;
};

const FileManager = ({ directory }: FileManagerProps): JSX.Element => {
  const { files, updateFiles } = useFiles(directory);

  return (
    <StyleFileManager {...useFileDrop(directory, updateFiles)}>
      {files.map((file) => (
        <StyledFileEntry key={file}>
          <FileEntry
            key={file}
            name={basename(file, extname(file))}
            path={resolve(directory, file)}
          />
        </StyledFileEntry>
      ))}
    </StyleFileManager>
  );
};

export default FileManager;
