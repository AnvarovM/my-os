/* eslint-disable import/no-unresolved */
import React from 'react';
import { ThemeContext } from 'styled-components';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as THREE from 'three';

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  const { wallpaper } = React.useContext(ThemeContext);
  React.useEffect(() => wallpaper?.(desktopRef), [desktopRef, wallpaper]);
};

export default useWallpaper;
