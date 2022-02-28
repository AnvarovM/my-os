import type { Processes } from 'utils/processDirectory';
import { toggleProcessSetting } from 'utils/processFunctions';

export const minimizeProcess =
  (pid: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(pid, 'minimize')(processes);

export const maximizeProcess =
  (pid: string) =>
  (processes: Processes): Processes =>
    toggleProcessSetting(pid, 'maximize')(processes);
