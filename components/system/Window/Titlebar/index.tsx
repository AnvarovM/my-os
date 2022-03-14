import {
  CloseIcon,
  MaximizedIcon,
  MaximizeIcon,
  MinimizeIcon
} from 'components/system/Icons';
import StyledTitleBar from 'components/system/Window/Titlebar/StyledTitlebar';
import useWindowActions from 'components/system/Window/Titlebar/useWindowActions';
import { useProcesses } from 'contexts/processes';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';

type TitlebarProps = {
  pid: string;
};

const Titlebar = ({ pid }: TitlebarProps) => {
  const {
    processes: {
      [pid]: { autoSizing, icon, title, maximized }
    }
  } = useProcesses();

  const { onClose, onMaximize, onMinimize } = useWindowActions(pid);
  return (
    <StyledTitleBar onDoubleClick={onMaximize} className="handle">
      <h1>
        <figure>
          <Image src={icon} alt={title} />
          <figcaption className="truncate">{title}</figcaption>
        </figure>
      </h1>
      <nav className="cancel">
        <Button onClick={onMinimize}>
          <MinimizeIcon />
        </Button>
        <Button className="maximize" onClick={onMaximize} disabled={autoSizing}>
          {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
        </Button>
        <Button className="close" onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitleBar>
  );
};

export default Titlebar;
