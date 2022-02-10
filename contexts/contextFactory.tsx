import React from 'react';
import type { ContextFactory } from 'types/context/contextFactory';

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  // SessionContextState
  const { Provider, Consumer } = React.createContext(initialContextState);

  // eslint-disable-next-line react/function-component-definition
  const ProcessesProvider: React.FC = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ProcessesProvider };
};

export default contextFactory;
