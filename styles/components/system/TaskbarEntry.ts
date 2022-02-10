import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

export const StyledTaskbarEntry = styled.li`
  background-color: #ff0;
  color: #252525;
  font-size: 13px;
  height: 100%;
  ${centered};
  width: ${({ theme }) => theme.sizes.taskbar.entry.width};
`;

export default StyledTaskbarEntry;
