/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
import Clock from 'components/system/Clock';
import StartButton from 'components/system/StartButton';
import TaskbarEntries from 'components/system/TaskbarEntries';
import { StyledTaskbar } from 'styles/components/system/Taskbar';

const Taskbar: React.FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
