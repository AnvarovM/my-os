import type { Processes } from 'types/context/process';
import { processDirectory } from 'utils/processDirectory';

export const closeProcess =
  (processId: string) =>
  ({ [processId]: _closeProcess, ...remainingProcesses }: Processes) =>
    remainingProcesses;

export const openProcess = (processId: string) => (currentProcesses: Processes) =>
    currentProcesses[processId] || !processDirectory[processId]
      ? currentProcesses
      : { ...currentProcesses, [processId]: processDirectory[processId] };
