import styled from 'styled-components';

type StyledWindowProps = {
  minimized?: boolean;
};

const StyleWindow = styled.section<StyledWindowProps>`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: ${({ minimized = false }) => (minimized ? 'none' : 'block')};
  position: absolute;
`;

export default StyleWindow;
