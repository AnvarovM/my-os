import type { WallpaperEffect } from 'styles/styled';
import * as THREE from 'three';
/* @ts-expect-error No declaration file is required */
import WAVES from 'vanta/dist/vanta.waves.min';

type VantaWavesSettings = {
  gyroControls: boolean;
  mouseControls: boolean;
  touchControls: boolean;
  shininess: number;
  color: number;
  waveHeight: number;
  waveSpeed: number;
  zoom: number;
};

const disableControls = {
  mouseControls: false,
  toucheControls: false
};

const isWebLAvailable = typeof WebGLRenderingContext !== 'undefined';

const VantaWaves =
  (settings: VantaWavesSettings): WallpaperEffect =>
  (el) => {
    const vantaEffect =
      el && isWebLAvailable
        ? WAVES({
            el,
            THREE,
            ...disableControls,
            ...settings
          })
        : undefined;

    return () => {
      vantaEffect?.destroy?.();
    };
  };

export default VantaWaves;
