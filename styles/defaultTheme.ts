/* eslint-disable import/no-unresolved */
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
  color: 0x5559,
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.25,
  zoom: 0.95
});

const sizes = {
  taskbar: {
    entry: {
      width: '80px'
    },
    height: '30px'
  },
  clock: {
    width: '90px'
  },
  StartButton: {
    width: '30px'
  }
};

const defaultTheme = { colors, sizes, wallpaper };

export default defaultTheme;
