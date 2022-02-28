import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

export const StyledClock = styled.time`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.sizes.clock.fontSize};
  height: 100%;
  ${centered};
  position: absolute;
  right: 0;
  text-align: center;
  width: ${({ theme }) => theme.sizes.clock.width};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};
  }
`;

export default StyledClock;
