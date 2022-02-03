/* eslint-disable import/no-unresolved */
import WindowManager from 'components/system/WindowManager';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';
// import processDirectory from 'utils/processDirectory';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}
