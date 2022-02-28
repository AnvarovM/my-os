import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const StyleFileManager = styled.ol`
  margin: 20px;
  padding: 10px 20px;
  width: min-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};
    border: 2px solid gray;
  }
`;

export default StyleFileManager;
