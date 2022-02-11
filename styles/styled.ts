import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primary: string;
      startButton: string;
      taskbar: string;
      window: string;
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
