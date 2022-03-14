/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import StyledTaskbarEntries from 'components/system/Taskbar/Entries/StyledTaskbarEntries';
import TaskbarEntry from 'components/system/Taskbar/Entry';
import { ProcessConsumer } from 'contexts/processes';

const TaskbarEntries: React.FC = () => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {({ mapProcesses }) =>
        mapProcesses(([id, { icon, title }]) => (
          <TaskbarEntry key={id} icon={icon} pid={id} title={title} />
        ))
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
