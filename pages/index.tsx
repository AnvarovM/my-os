/* eslint-disable import/no-unresolved */
import Desktop from 'components/system/Desktop';
import ProcessorLoader from 'components/system/ProcessorLoader';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';
import { getStartupProcesses } from 'utils/processDirectory';

export default function Home(): ReactElement {
  return (
    <ProcessProvider startupProccesses={getStartupProcesses()}>
      <Desktop>
        <ProcessorLoader />
      </Desktop>
    </ProcessProvider>
  );
}
