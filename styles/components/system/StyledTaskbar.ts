/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StyledTaskbar = styled.footer`
  backdrop-filter: ${({ theme }) => `blur(${theme.sizes.taskbar.blur})`};
  background-color: ${({ theme }) => theme.colors.taskbar};
  bottom: 0;
  font-size: 30px;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: 100;
`;
