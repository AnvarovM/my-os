/* eslint-disable import/no-cycle */
import StyledJSDOS from 'components/apps/JSDOS/StyledJSDOS';
import useJSDOS from 'components/apps/JSDOS/useJSDOS';
import type { ProcessComponentProps } from 'components/system/Processes/RenderProcesses';
import { useProcesses } from 'contexts/processes';
import { useRef } from 'react';

const JSDOS = ({ pid }: ProcessComponentProps): JSX.Element => {
  const {
    processes: {
      [pid]: { url = '' }
    }
  } = useProcesses();
  const screenRef = useRef<HTMLDivElement | null>(null);

  useJSDOS(pid, url, screenRef);

  return <StyledJSDOS ref={screenRef} />;
};

export default JSDOS;
