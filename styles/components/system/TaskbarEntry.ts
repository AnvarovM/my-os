import styled from 'styled-components';

const centered = `
  display: flex;
`;

export const StyledTaskbarEntry = styled.li`
  border-bottom: ${({ theme }) => theme.colors.heightLight};
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  ${centered};

  figure {
    align-items: center;
    display: flex;

    img {
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
      margin: ${({ theme }) => theme.sizes.taskbar.entry.icon.margin};
      width: ${({ theme }) => theme.sizes.taskbar.entry.icon.size};
    }

    figcaption {
      color: ${({ theme }) => theme.colors.opaqueWhite};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
    }
  }
`;

export default StyledTaskbarEntry;
