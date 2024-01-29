// store.ts
import { configureStore } from '@reduxjs/toolkit';
import demoReducer from './demoSlice';

const store = configureStore({
  reducer: {
    demo: demoReducer,
    // Add other reducers here if needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
