import styled from 'styled-components';

export const StyledClock = styled.time`
  background-color: #ff5f1f;
  color: #fff;
  height: 100%;
  position: absolute;
  right: 0;
  text-align: center;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
