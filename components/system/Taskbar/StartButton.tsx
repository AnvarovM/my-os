/* eslint-disable import/no-named-as-default */
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledStartButton from 'styles/components/system/StyledStartButton';


const Taskbar = (): JSX.Element => (
  <StyledStartButton title="start">
    <FontAwesomeIcon icon={faWindows} />
  </StyledStartButton>
);

export default Taskbar;
