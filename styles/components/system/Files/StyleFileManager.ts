import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
const StyleFileManager = styled.ol`
  border: 2px solid transparent;
  color: ${({ theme }) => theme.colors.text};
  margin: 20px;
  padding: 5px 10px;
  width: min-content;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};
    border: 2px solid gray;
  }
`;

export default StyleFileManager;
