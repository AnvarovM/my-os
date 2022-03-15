import 'styled-components';

export type WallpaperEffect = (el: HTMLElement | null) => () => void;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      fileEntry: {
        background: string;
        border: string;
        text: string;
        textShadow: string;
      };
      heightLight: string;
      startButton: string;
      startButtonHover: string;
      taskbar: {
        active: string;
        activeHover: string;
        background: string;
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
      window: {
        background: string;
        outline: string;
        shadow: string;
      };
    };
    sizes: {
      taskbar: {
        blur: string;
        entry: {
          fontSize: string;
          icon: {
            size: string;
          };
          maxWidth: string;
          iconSize: string;
        };
        height: string;
      };
      text: string;
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
      fileManager: {
        columnGap: string;
        gridEntryHeight: string;
        gridEntryWidth: string;
        padding: string;
        rowGap: string;
      };
      StartButton: {
        size: string;
        width: string;
      };
      window: {
        lineHeight: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
