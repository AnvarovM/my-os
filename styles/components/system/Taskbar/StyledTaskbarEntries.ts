import styled from 'styled-components';

export const StyledStartButton = styled.ul`
  column-gap: 1px;
  display: flex;
  height: 100%;
  left: ${({ theme }) => theme.sizes.StartButton.width};
  margin: 0 3px;
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledStartButton;
