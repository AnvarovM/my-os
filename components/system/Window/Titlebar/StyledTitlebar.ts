import styled from 'styled-components';

const StyledTitleBar = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.titleBar.backgroundColor};
  display: flex;
  height: ${({ theme }) => theme.sizes.titleBar.height};

  h1 {
    color: ${({ theme }) => theme.colors.titleBar.text};
    display: flex;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.sizes.titleBar.fontSize};
    font-weight: normal;
    min-width: 0;
  }

  figure {
    align-items: center;
    display: flex;
    margin: 2.5px 0;
    min-width: inherit;

    figcaption {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    img {
      height: ${({ theme }) => theme.sizes.titleBar.iconsSize};
      margin: ${({ theme }) => theme.sizes.titleBar.iconsMargin};
      width: ${({ theme }) => theme.sizes.titleBar.iconsSize};
    }
  }

  nav {
    display: flex;

    button {
      border-left: 1px solid #000;
      display: flex;
      height: ${({ theme }) => theme.sizes.titleBar.height};
      place-content: center;
      place-items: center;
      width: ${({ theme }) => theme.sizes.titleBar.buttonWidth};

      &:hover {
        background-color: ${({ theme }) =>
          theme.colors.titleBar.backgroundHover};

        &.close,
        &.maximized {
          background-color: ${({ theme }) => theme.colors.titleBar.closeHover};
          transition: background-color 0.25s ease;
        }
      }

      &:disabled {
        svg {
          fill: rgb(50, 50, 50);
          margin: 0 1px 2px 0;
        }

        &:hover {
          background-color: inherit;
        }
      }

      svg {
        fill: #fff;
        width: ${({ theme }) => theme.sizes.titleBar.buttonIconSize};
      }
    }
  }
`;

export default StyledTitleBar;
