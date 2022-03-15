/* eslint-disable import/prefer-default-export */
export const cleanUpBufferUrl = (url: string): void => URL.revokeObjectURL(url);
