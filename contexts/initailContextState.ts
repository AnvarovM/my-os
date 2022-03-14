import type { FileSystemContextState } from 'contexts/fileSystem/useFileSystemContextState';
import type { ProcessContextState } from 'contexts/processes/useProcessContextState';
import type { SessionContextState } from 'contexts/session/useSessionContextState';

export const initialFileSystemContextState: FileSystemContextState = {
  fs: null
};

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  open: () => undefined,
  mapProcesses: () => [],
  maximized: () => undefined,
  minimized: () => undefined,
  processes: {}
};
export const initialSessionContextState: SessionContextState = {
  foregroundId: '',
  setForegroundId: () => undefined,
  setStackOrder: () => undefined,
  setThemeName: () => undefined,
  setWindowStates: () => undefined,
  stackOrder: [],
  themeName: '',
  windowStates: {}
};
