/* eslint-disable import/no-cycle */
import useV86 from 'components/apps/V86/useV86';
import useV86ScreenSize from 'components/apps/V86/useV86ScreenSize';
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import { useProcesses } from 'contexts/processes';
import { useRef } from 'react';
import StyledV86 from 'styles/components/app/V86/StyledV86';

const V86 = ({ pid }: ProcessComponentProps): JSX.Element => {
  const {
    processes: {
      [pid]: { url = '' }
    }
  } = useProcesses();
  const screenRef = useRef<HTMLDivElement | null>(null);
  const { emulator, lockMouse } = useV86(pid, url, screenRef);
  const txtStyle = useV86ScreenSize(pid, emulator);

  return (
    <StyledV86 ref={screenRef} onClick={lockMouse}>
      <div style={txtStyle} />
      <canvas />
    </StyledV86>
  );
};

export default V86;
