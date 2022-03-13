/* eslint-disable import/no-named-as-default */
import { useProcesses } from 'contexts/processes';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';
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
          <Image src={icon} alt="" />
          <figcaption className="truncate">{title}</figcaption>
        </figure>
      </Button>
    </StyledTaskbarEntry>
  );
};

export default TaskbarEntry;
