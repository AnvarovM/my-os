/* eslint-disable import/no-named-as-default */
import StyledTaskbarEntry from 'components/system/Taskbar/Entry/StyledTaskbarEntry';
import useNextFocusable from 'components/system/Window/useNextFocusable';
import { useProcesses } from 'contexts/processes';
import { useSession } from 'contexts/session';
import { useCallback } from 'react';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';

type TaskbarEntryProps = {
  icon: string;
  pid: string;
  title: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TaskbarEntry = ({ icon, pid, title }: TaskbarEntryProps): JSX.Element => {
  const nextFocusableId = useNextFocusable(pid);
  const { setForegroundId } = useSession();
  const { minimized } = useProcesses();
  const onClick = useCallback(() => {
    minimized(pid);
    setForegroundId(nextFocusableId);
  }, [pid, minimized, nextFocusableId, setForegroundId]);
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
