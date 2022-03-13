/* eslint-disable import/prefer-default-export */
export const pxToNumber = (value: string): number =>
  Number(value.replace('px', ''));
