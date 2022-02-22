/* eslint-disable import/no-named-as-default */
import StyledTaskbarEntry from 'styles/components/system/Taskbar/TaskbarEntry';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TaskbarEntry = ({ icon, title }: any): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <img src={icon} alt="" />
      <figcaption>{title}</figcaption>
    </figure>
  </StyledTaskbarEntry>
);

export default TaskbarEntry;
