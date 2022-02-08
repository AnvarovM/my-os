/* eslint-disable import/no-unresolved */
import ProcessorLoader from 'components/system/ProcessorLoader';
import { ProcessProvider } from 'contexts/process';
import type { ReactElement } from 'react';
import { getStartupProcesses } from 'utils/processDirectory';

export default function Home(): ReactElement {
  return (
    <ProcessProvider startupProccesses={getStartupProcesses()}>
      <ProcessorLoader />
    </ProcessProvider>
  );
}
