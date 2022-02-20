import dynamic from 'next/dynamic';
import type { FC } from 'react';
import type { Process, Processes } from 'types/context/process';

const Window = dynamic(() => import('components/system/Window'));

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

type RenderProcessesProps = {
  processes: Processes;
};

const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? withWindow(Component) : <Component />;

// eslint-disable-next-line import/prefer-default-export
export const RenderProcesses: FC<RenderProcessesProps> = ({ processes }) => (
  <>
    {Object.entries(processes).map(([id, process]) => (
      <RenderProcess key={id} {...process} />
    ))}
  </>
);
