/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import TaskbarEntry from 'components/system/Taskbar/TaskbarEntry';
import { ProcessConsumer } from 'contexts/process';
import StyledTaskbarEntries from 'styles/components/system/Taskbar/StyledTaskbarEntries';

const TaskbarEntries: React.FC = () => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {({ mapProcesses }) =>
        mapProcesses(([id, { icon, title }]) => (
          <TaskbarEntry key={id} icon={icon} title={title} />
        ))
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
