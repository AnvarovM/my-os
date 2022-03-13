import type { config } from 'components/apps/V86/config';
import type { V86ImageConfig } from 'components/apps/V86/image';

export type EventCallback = (data: number[]) => void;

type EventListener = (event: string, callback: EventCallback) => void;

export type V86Starter = {
  add_listener: EventListener;
  destroy: () => void;
  lock_mouse: () => void;
  remove_listener: EventListener;
  save_state: (callback: (error: Error, newState: ArrayBuffer) => void) => void;
};

export type V86 = {
  emulator: V86Starter | null;
  lockMouse: () => void;
};

export type V86Config = V86ImageConfig &
  typeof config & {
    boot_order: number;
    cdrom?: {
      url?: string;
    };
    fda?: {
      url?: string;
    };
    memory_size: number;
    initial_state?: { url: string };
    vga_memory_size: number;
    screen_container: HTMLDivElement | null;
  };

type V86Constructor = new (v86Config: V86Config) => V86Starter;

declare global {
  interface Window {
    DEBUG?: boolean;
    V86Starter: V86Constructor;
  }
}

export type WindowWithV86Starter = Window &
  typeof globalThis & { V86Starter: V86Constructor };

export type NavigatorWithV86Starter = Navigator & { deviceMemory: number };
