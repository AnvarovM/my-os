/* eslint-disable import/no-unresolved */
import VantaWaves from 'utils/vantaWaves';

const colors = {
  colors: {
    primary: '#252525',
    window: '#1bc321',
    backgroundColor: '#4b0082'
  }
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

const defaultTheme = { colors, wallpaper };

export default defaultTheme;
