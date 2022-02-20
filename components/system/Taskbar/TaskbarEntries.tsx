/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import TaskbarEntry from 'components/system/Taskbar/TaskbarEntry';
import { ProcessConsumer } from 'contexts/process';
import StyledTaskbarEntries from 'styles/components/system/StyledTaskbarEntries';

const TaskbarEntries: React.FC = () => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, { icon, title }]) => (
          <TaskbarEntry key={id} icon={icon} title={title} />
        ))
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
