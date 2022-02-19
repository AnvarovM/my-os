/* eslint-disable import/no-named-as-default */
import StyledTaskbarEntry from 'styles/components/system/TaskbarEntry';

const TaskbarEntry = ({ icon, title }): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <img src={icon} alt="" />
      <p>{title}</p>
    </figure>
  </StyledTaskbarEntry>
);

export default TaskbarEntry;
