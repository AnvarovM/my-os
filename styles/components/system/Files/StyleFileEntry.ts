import styled from 'styled-components';

const StyleFileEntry = styled.li`
  display: flex;
  justify-content: center;
  padding: 2px;
  place-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fileEntry.background};
    border: 2px solid ${({ theme }) => theme.colors.fileEntry.border};
    padding: 0;
    position: relative;

    &::before {
      border: 2px solid hsla(0, 0%, 70%, 50%);
      bottom: -1px;
      content: '';
      left: -1px;
      position: absolute;
      right: -1px;
      top: -1px;
    }
  }

  button {
    position: relative;

    figcaption {
      color: ${({ theme }) => theme.colors.fileEntry.text};
      font-size: 11.5px;
      position: relative;
      text-shadow: ${({ theme }) => theme.colors.fileEntry.textShadow};
      top: -1px;
    }

    img {
      width: 48px;
    }
  }
`;

export default StyleFileEntry;
