import Window from 'components/system/Window';
import { ProcessConsumer } from 'contexts/process';

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

const ProcessorLoader = () => {
  return (
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, { Component, hasWindow }]) =>
          hasWindow ? withWindow(Component) : <Component key={id} />
        )
      }
    </ProcessConsumer>
  );
};

export default ProcessorLoader;
