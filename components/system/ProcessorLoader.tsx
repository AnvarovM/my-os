/* eslint-disable import/no-unresolved */
import { ProcessConsumer } from 'contexts/process';

function ProcessorLoader() {
  return (
    <ProcessConsumer>
      {({ processes }) => Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
      ))}
    </ProcessConsumer>
  );
}

export default ProcessorLoader;
