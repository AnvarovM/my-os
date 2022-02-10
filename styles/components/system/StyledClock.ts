import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

export const StyledClock = styled.time`
  background-color: #ff5f1f;
  color: #fff;
  font-size: ${({ theme }) => theme.fonts.clock.size};
  height: 100%;
  ${centered};
  position: absolute;
  right: 0;
  text-align: center;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;
