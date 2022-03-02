import styled from 'styled-components';

type StyledWindowProps = {
  minimized?: boolean;
};

const StyleWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.window.background};
  box-shadow: ${({ theme }) => theme.colors.window.shadow};
  display: ${({ minimized = false }) => (minimized ? 'none' : 'block')};
  height: 100%;
  outline: 1px solid ${({ theme }) => theme.colors.window.outline};
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

export default StyleWindow;
