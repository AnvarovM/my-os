import React from 'react';
import { ThemeContext } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as THREE from 'three';

const useWallpaper = (
  desktopRef: React.RefObject<HTMLElement | null>
): void => {
  const { wallpaper } = React.useContext(ThemeContext);
  React.useEffect(
    () => wallpaper?.(desktopRef.current),
    [desktopRef, wallpaper]
  );
};

export default useWallpaper;

//  import Color from 'color';
// import { useEffect } from 'react';
// import * as THREE from 'three';
// import type { WallpaperEffect } from 'types/components/System/Desktop/Wallpaper';
// // import { MILLISECONDS_IN_SECOND } from 'utils/constants';
// import WAVES from 'vanta/dist/vanta.waves.min';

// const MILLISECONDS_IN_SECOND = 1000;

// const fps = 20;
// const updateIntervalInMilliseconds = MILLISECONDS_IN_SECOND / fps;
// const initialColor = 200;
// const vantaJsSettings = {
//   gyroControls: false,
//   mouseControls: false,
//   touchControls: false,
//   shininess: 35,
//   waveHeight: 15,
//   waveSpeed: 0.25,
//   zoom: 0.95
// };

// const initRainbowEffect = (wallpaperEffect: WallpaperEffect): (() => void) => {
//   let then = Date.now();
//   let base = initialColor;
//   let colorUpdateAnimationId: number;

//   const updateColor = () => {
//     const now = Date.now();
//     const delta = now - then;

//     if (delta > updateIntervalInMilliseconds) {
//       base = base > 360 ? 0 : base + 1;
//       then = now - (delta % updateIntervalInMilliseconds);
//     }

//     colorUpdateAnimationId = requestAnimationFrame(updateColor);
//   };

//   colorUpdateAnimationId = requestAnimationFrame(updateColor);

//   return () => {
//     cancelAnimationFrame(colorUpdateAnimationId);
//   };
// };

// const renderWallpaperEffect = ({
//   current: renderElement
// }: React.RefObject<HTMLElement>): WallpaperEffect => {
//   const wallpaperEffect = WAVES({
//     el: renderElement,
//     THREE,
//     ...vantaJsSettings
//   });
//   const cancelRainbowEffect = initRainbowEffect(wallpaperEffect);

//   wallpaperEffect.onDestroy = cancelRainbowEffect;

//   return wallpaperEffect;
// };

// const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
//   useEffect(() => {
//     // eslint-disable-next-line testing-library/render-result-naming-convention
//     const wallpaperEffect = renderWallpaperEffect(desktopRef);

//     return () => {
//       wallpaperEffect?.destroy();
//     };
//   }, [desktopRef]);
// };

// export default useWallpaper;
