/* eslint-disable react/jsx-props-no-spreading */
import FileEntry from 'components/system/Files/FileEntry';
import StyledFileEntry from 'components/system/Files/FileEntry/StyleFileEntry';
import StyleFileManager from 'components/system/Files/FileManager/StyleFileManager';
import useFileDrop from 'components/system/Files/useFileDrop';
import useFiles from 'components/system/Files/useFiles';
import { basename, extname, resolve } from 'path';

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
