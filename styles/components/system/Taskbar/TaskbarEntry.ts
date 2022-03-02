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
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.sizes.taskbar.entry.fontSize};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }
`;

export default StyledTaskbarEntry;
