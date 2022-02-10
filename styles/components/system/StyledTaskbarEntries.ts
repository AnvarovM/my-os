import styled from 'styled-components';

export const StyledStartButton = styled.button`
  background-color: #1cbea2;
  color: #fff;
  height: 100%;
  left: ${({ theme }) => theme.sizes.StartButton.width};
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
  width: 100%;
`;

export default StyledStartButton;
