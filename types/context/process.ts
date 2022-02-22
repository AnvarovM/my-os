export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type ProcessesMap = (
  callback: ([id, process]: [string, Process]) => JSX.Element
) => JSX.Element[];

export type Processes = {
  [pid: string]: Process;
};

export type ProcessContextState = {
  close: (pid: string) => void;
  open: (pid: string) => void;
  mapProcesses: ProcessesMap;
};

export type ProcessProviderProps = {
  startupProcesses: Processes;
};
