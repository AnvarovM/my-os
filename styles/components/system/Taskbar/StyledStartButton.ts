import styled from 'styled-components';

const Button = styled.button.attrs(() => ({
  type: 'button'
}))`
  background-color: transparent;
  font-family: inherit;
`;

const centered = `
  display: flex;
  place-content: center;
  place-items: center;
`;

const StyledStartButton = styled(Button)`
  color: ${({ theme }) => theme.colors.startButton};
  height: 100%;
  font-size: ${({ theme }) => theme.sizes.StartButton.size};
  left: 0;
  ${centered};
  position: absolute;
  width: ${({ theme }) => theme.sizes.StartButton.width};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbarHover};

    svg {
      color: ${({ theme }) => theme.colors.startButtonHover};
    }
  }
`;

export default StyledStartButton;
