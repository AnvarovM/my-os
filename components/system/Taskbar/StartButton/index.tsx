import StyledStartButton from 'components/system/Taskbar/StartButton/StyledStartButton';
import WindowsIcon from 'components/system/Taskbar/StartButton/WindowsIcon';

const Taskbar = (): JSX.Element => (
  <StyledStartButton title="start">
    <WindowsIcon />
  </StyledStartButton>
);

export default Taskbar;
