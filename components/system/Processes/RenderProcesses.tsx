/* eslint-disable import/prefer-default-export */
import dynamic from 'next/dynamic';
import type { FC } from 'react';

const Window = dynamic(() => import('components/system/Window'));

export type ProcessComponentProps = {
  pid: string;
};

type RenderProcessProps = {
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  pid: string;
};

export const RenderProcess: FC<RenderProcessProps> = ({
  Component,
  hasWindow = false,
  pid
}: RenderProcessProps): JSX.Element =>
  hasWindow ? (
    <Window pid={pid}>
      <Component pid={pid} />
    </Window>
  ) : (
    <Component pid={pid} />
  );
