/* eslint-disable import/no-unresolved */
import TaskbarEntry from 'components/system/Taskbar/TaskbarEntry';
import StyledTaskbarEntries from 'styles/components/system/StyledTaskbarEntries';

const TaskbarEntries: React.FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
