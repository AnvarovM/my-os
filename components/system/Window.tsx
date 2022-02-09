/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */
import StyleWindow from 'styles/components/system/StyledWindow';

function Window({ children }: any): JSX.Element {
  return (
    <div>
      <StyleWindow>{children}</StyleWindow>
    </div>
  );
}

export default Window;
