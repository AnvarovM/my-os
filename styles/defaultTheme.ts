import type { DefaultTheme } from 'styled-components';
import VantaWaves from 'utils/vantaWaves';

const colors = {
  primary: '#252525',
  window: '#1bc321',
  backgroundColor: '#4b0082'
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

const fonts = {
  clock: {
    size: '14px'
  }
};

const sizes = {
  taskbar: {
    entry: {
      maxWidth: '161px'
    },
    height: '30px'
  },
  clock: {
    width: '76px'
  },
  StartButton: {
    width: '36px'
  }
};

const defaultTheme: DefaultTheme = { colors, fonts, sizes, wallpaper };

export default defaultTheme;
