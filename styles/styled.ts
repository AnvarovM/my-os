import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primary: string;
      taskbar: string;
      window: string;
    };
    fonts: {
      clock: {
        size: string;
      };
    };
    sizes: {
      taskbar: {
        blur: string;
        entry: {
          maxWidth: string;
        };
        height: string;
      };
      clock: {
        width: string;
      };
      StartButton: {
        width: string;
      };
    };
    wallpaper?: WallpaperEffect;
  }
}
