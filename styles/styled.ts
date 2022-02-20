import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      opaqueWhite: string;
      heightLight: string;
      primary: string;
      startButton: string;
      taskbar: string;
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
