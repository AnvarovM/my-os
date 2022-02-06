/* eslint-disable import/no-unresolved */
import Window from 'components/system/Window';
import { ProcessConsumer } from 'contexts/process';

function ProcessorLoader() {
  return (
    <ProcessConsumer>
      {({ processes }) => Object.entries(processes).map(([id, { Component, hasWindow }]) => (
        hasWindow ? (
          <Window key={id}>
            <Component />
          </Window>
        )
          : <Component key={id} />
      ))}
    </ProcessConsumer>
  );
}

export default ProcessorLoader;
