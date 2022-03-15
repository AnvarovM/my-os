import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const StyleFileManager = styled.ol`
  column-gap: ${({ theme }) => theme.sizes.fileManager.columnGap};
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ theme }) =>
    theme.sizes.fileManager.gridEntryWidth};
  grid-template-rows: ${({ theme }) => theme.sizes.fileManager.gridEntryHeight};
  height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
  padding: ${({ theme }) => theme.sizes.fileManager.padding};
  row-gap: ${({ theme }) => theme.sizes.fileManager.rowGap};
`;

export default StyleFileManager;
