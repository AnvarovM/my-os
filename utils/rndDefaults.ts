import type { HandleStyles } from 'react-rnd';
import { CSSProperties } from 'styled-components';

const rndDefaults = {
  bounds: 'main',
  cancel: '.cancel',
  dragHandleClassName: 'handle',
  enableUserSelectHack: true,
  resizeHandleStyles: <HandleStyles>{
    bottom: {
      bottom: '-3px',
      cursor: 'ns-resize',
      height: '6px'
    },
    bottomLeft: {
      bottom: '-3px',
      cursor: 'sw-resize',
      height: '6px',
      left: '-3px',
      width: '12px'
    },
    bottomRight: {
      bottom: '-3px',
      cursor: 'se-resize',
      height: '12px',
      right: '-3px',
      width: '12px'
    },
    left: {
      left: '-3px',
      cursor: 'ew-resize',
      width: '6px'
    },
    right: {
      right: '-3px',
      cursor: 'ew-resize',
      width: '6px'
    },
    top: {
      top: '-3px',
      cursor: 'ns-resize',
      height: '6px'
    }
  },
  style: <CSSProperties>{
    zIndex: 1
  }
};

export default rndDefaults;
