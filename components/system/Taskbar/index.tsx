import Clock from 'components/system/Taskbar/Clock/Clock';
import TaskbarEntries from 'components/system/Taskbar/Entries';
import StartButton from 'components/system/Taskbar/StartButton';
import { StyledTaskbar } from 'components/system/Taskbar/StyledTaskbar';

const Taskbar: React.FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
