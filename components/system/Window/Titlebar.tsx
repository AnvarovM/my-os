import { CloseIcon, MaximizeIcon, MinimizeIcon } from 'components/system/Icons';
import { useProcesses } from 'contexts/process';
import useWindowActions from 'hooks/useWindowActions';
import Button from 'styles/common/Button';
import Image from 'styles/common/Image';
import StyledTitleBar from 'styles/components/system/Window/StyledTitlebar';

type TitlebarProps = {
  pid: string;
};

const Titlebar = ({ pid }: TitlebarProps) => {
  const {
    processes: {
      [pid]: { autoSizing, icon, title }
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
        <Button onClick={onMaximize} disabled={autoSizing}>
          <MaximizeIcon />
        </Button>
        <Button className="close" onClick={onClose}>
          <CloseIcon />
        </Button>
      </nav>
    </StyledTitleBar>
  );
};

export default Titlebar;
