/* eslint-disable import/no-unresolved */
import { ProcessConsumer } from 'contexts/process';

function WindowManager() {
  return (
    <ProcessConsumer>
      {({ processes }) => Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
      ))}
    </ProcessConsumer>
  );
}

export default WindowManager;
