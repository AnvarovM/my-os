/* eslint-disable import/prefer-default-export */
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import type { Process } from 'types/context/process';

const Window = dynamic(() => import('components/system/Window'));

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

export const RenderProcess: FC<Process> = ({ Component, hasWindow }) =>
  hasWindow ? withWindow(Component) : <Component />;
