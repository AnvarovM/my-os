import WindowsIcon from 'components/system/Icons';
import StyledStartButton from 'styles/components/system/Taskbar/StyledStartButton';

const Taskbar = (): JSX.Element => (
  <StyledStartButton title="start">
    <WindowsIcon />
  </StyledStartButton>
);

export default Taskbar;
