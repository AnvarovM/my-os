/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';
import type { Process } from 'types/context/process';

export const HelloWorld: Process = {
  Component: dynamic(() => import('components/apps/HelloWorld')),
  hasWindow: true,
  icon: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
  title: 'Hello again'
};

export const Taskbar: Process = {
  Component: dynamic(() => import('components/system/Taskbar')),
  icon: '',
  title: ''
};
