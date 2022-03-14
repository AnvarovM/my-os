import styled from 'styled-components';

export const StyledStartButton = styled.ul`
  display: flex;
  height: 100%;
  left: ${({ theme }) => theme.sizes.StartButton.width};
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledStartButton;
