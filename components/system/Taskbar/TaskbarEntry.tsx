/* eslint-disable import/no-named-as-default */
import { useProcesses } from 'contexts/process';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import StyledTaskbarEntry from 'styles/components/system/Taskbar/TaskbarEntry';

type TaskbarEntryProps = {
  icon: string;
  pid: string;
  title: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TaskbarEntry = ({ icon, pid, title }: TaskbarEntryProps): JSX.Element => {
  const { minimized } = useProcesses();
  const onClick = useCallback(() => minimized(pid), [minimized, pid]);
  return (
    <StyledTaskbarEntry>
      <Button onClick={onClick}>
        <figure>
          <img src={icon} alt="" />
          <figcaption>{title}</figcaption>
        </figure>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
