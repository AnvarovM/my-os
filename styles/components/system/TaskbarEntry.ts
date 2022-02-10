import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

export const StyledTaskbarEntry = styled.li`
  color: #fff;
  font-size: 13px;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  ${centered};
`;

export default StyledTaskbarEntry;
