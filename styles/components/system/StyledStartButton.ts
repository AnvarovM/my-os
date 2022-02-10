import styled from 'styled-components';

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

export const StyledStartButton = styled.button`
  background-color: #1cbe21;
  color: #fff;
  height: 100%;
  left: 0;
  ${centered};
  position: absolute;
  width: ${({ theme }) => theme.sizes.StartButton.width};
`;

export default StyledStartButton;
