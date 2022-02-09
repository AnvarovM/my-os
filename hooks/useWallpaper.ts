// /* eslint-disable import/no-unresolved */
// import WAVES from 'libs/vanta.waves.min';
// import type { RefObject } from 'react';
// import { useEffect } from 'react';
// import * as THREE from 'three';

// const vantaJsSettings = {
//   gyroControls: false,
//   mouseControls: false,
//   color: 'red',
//   touchControls: false,
//   shininess: 35,
//   waveHeight: 15,
//   waveSpeed: 0.25,
//   zoom: 0.95
// };

// const useWallpaper = (refElement: RefObject<HTMLElement>): void => {
//   useEffect(() => {
//     const vantaEffect = WAVES({
//       el: refElement.current,
//       THREE,
//       ...vantaJsSettings
//     });

//     return () => {
//       vantaEffect.destroy();
//     };
//   }, [refElement]);
// };

// export default useWallpaper;
