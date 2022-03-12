/* eslint-disable import/no-cycle */
import { useProcesses } from 'contexts/process';

const HelloWorld = ({ pid }): JSX.Element => {
  const {
    processes: {
      [pid]: { url }
    }
  } = useProcesses();
  return <h1>Hi how are you? {url} </h1>;
};

export default HelloWorld;
