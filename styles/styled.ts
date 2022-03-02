import 'styled-components';

export type WallpaperEffect = (el: HTMLElement | null) => () => void;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      heightLight: string;
      startButton: string;
      startButtonHover: string;
      taskbar: {
        backgroundColor: string;
        hover: string;
      };
      titleBar: {
        backgroundColor: string;
        backgroundHover: string;
        closeHover: string;
        text: string;
      };
      text: string;
      taskbarHover: string;
      window: string;
    };
    sizes: {
      taskbar: {
        blur: string;
        entry: {
          fontSize: string;
          icon: {
            margin: string;
            size: string;
          };
          maxWidth: string;
        };
        height: string;
      };
      titleBar: {
        buttonIconSize: string;
        buttonWidth: string;
        fontSize: string;
        height: string;
        iconsMargin: string;
        iconsSize: string;
      };
      clock: {
        fontSize: string;
        width: string;
      };
      StartButton: {
        size: string;
        width: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
