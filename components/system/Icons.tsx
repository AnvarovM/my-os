import { MdOutlineMinimize } from 'react-icons/md';
import { VscChromeClose, VscChromeMaximize } from 'react-icons/vsc';

export const MinimizeIcon = () => {
  return <MdOutlineMinimize />;
};

export const MaximizedIcon = () => (
  <svg style={{ width: '11px' }} viewBox="0 0 10 10">
    <path d="M2.1 0v2H0v8.1h8.2v-2h2V0H2.1zm5.1 9.2H1.1V3h6.1v6.2zm2-2.1h-1V2H3.1V1h6.1v6.1z" />
  </svg>
);

export const MaximizeIcon = () => {
  return <VscChromeMaximize />;
};

export const CloseIcon = () => {
  return <VscChromeClose />;
};
