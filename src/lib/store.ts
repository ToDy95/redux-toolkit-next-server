import { configureStore } from '@reduxjs/toolkit';
import userReducer from './rootSlice';

export function makeStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    preloadedState,
  });
}

export type RootState = ReturnType<ReturnType<typeof makeStore>['getState']>;
export type AppStore = ReturnType<typeof makeStore>;
