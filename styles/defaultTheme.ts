import type { DefaultTheme } from 'styled-components';
import VantaWaves from 'utils/vantaWaves';

const colors = {
  backgroundColor: '#4b0082',
  clockText: 'rgba(255, 255, 255, 80%)',
  primary: '#252525',
  startButton: '#fff',
  window: '#1bc321',
  taskbar: 'rgba(0, 0, 0, 0.6)'
};

const wallpaper = VantaWaves({
  gyroControls: true,
  mouseControls: false,
  touchControls: false,
  color: 0x113657,
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.25,
  zoom: 0.95
});

const sizes = {
  taskbar: {
    blur: '5px',
    entry: {
      maxWidth: '161px'
    },
    height: '30px'
  },
  clock: {
    fontSize: '15px',
    width: '76px'
  },
  StartButton: {
    size: '18px',
    width: '36px'
  }
};

const defaultTheme: DefaultTheme = { colors, sizes, wallpaper };

export default defaultTheme;
