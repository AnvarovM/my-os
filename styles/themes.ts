/* eslint-disable import/no-unresolved */
import type { Themes } from 'types/styles/themes';
import VantaWaves from 'utils/vantaWaves';

const defaultTheme = {
  colors: {
    primary: '#252525',
    window: '#1bc321',
    backgroundColor: '#4b0082'
  },
  wallpaper: VantaWaves({
    gyroControls: true,
    mouseControls: false,
    touchControls: false,
    color: 0x5559,
    shininess: 35,
    waveHeight: 15,
    waveSpeed: 0.25,
    zoom: 0.95
  })
};

const themes: Themes = { defaultTheme };

export default themes;
