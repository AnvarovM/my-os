import styled from 'styled-components';

export const StyledTaskbarEntry = styled.li`
  background-color: yellow;
  color: #fff;
  height: 100%;
  width: ${({ theme }) => theme.sizes.taskbar.entry.width};
`;

export default StyledTaskbarEntry;
