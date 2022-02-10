import React from 'react';

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: React.FC;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  // SessionContextState
  const { Provider, Consumer } = React.createContext(initialContextState);

  const ProcessesProvider: React.FC = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ProcessesProvider };
};

export default contextFactory;
