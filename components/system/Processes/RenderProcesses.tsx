/* eslint-disable import/prefer-default-export */
import dynamic from 'next/dynamic';
import type { FC } from 'react';

const Window = dynamic(() => import('components/system/Window'));

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

type RenderProcessProps = {
  Component: React.ComponentType;
  hasWindow: boolean;
};

export const RenderProcess: FC<RenderProcessProps> = ({
  Component,
  hasWindow
}) => (hasWindow ? withWindow(Component) : <Component />);
