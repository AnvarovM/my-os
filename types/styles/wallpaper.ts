export type VantaWavesSettings = {
    gyroControls: boolean;
    mouseControls: boolean;
    touchControls: boolean;
    shininess: number;
    color: number,
    waveHeight: number;
    waveSpeed: number;
    zoom: number
}

export type WallpaperEffect = (
  desktopRef: React.RefObject<HTMLElement>
) => () => void;
