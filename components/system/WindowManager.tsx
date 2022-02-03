/* eslint-disable import/no-unresolved */
import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';

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
