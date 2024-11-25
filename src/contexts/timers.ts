import {createContext, useState} from 'react';

export const defaultRunning = false;
export const defaultReset = 0;

export const Context = createContext({
  reset: defaultReset,
  running: defaultRunning,
});

export const {Provider} = Context;
