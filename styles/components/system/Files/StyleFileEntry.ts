import styled from 'styled-components';

const StyleFileEntry = styled.li`
  display: flex;
  justify-content: center;
  padding: 2px;
  place-content: center;

  &:hover {
    background-color: hsla(0, 0%, 50%, 25%);
    border: 2px solid hsla(0, 0%, 50%, 25%);
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
    z-index: 1;
    figcaption {
      color: ${({ theme }) => theme.colors.text};
      font-size: 11.5px;
      text-shadow: 5px 3px 5px rgba(0, 0, 0, 0.29);
    }

    img {
      height: 48px;
      width: 48px;
    }
  }
`;

export default StyleFileEntry;
