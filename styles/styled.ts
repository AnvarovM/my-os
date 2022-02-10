import 'styled-components';

import type { WallpaperEffect } from 'types/styles/wallpaper';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      primary: string;
      window: string;
    };
    sizes: {
      taskbar: {
        entry: {
          width: string;
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
