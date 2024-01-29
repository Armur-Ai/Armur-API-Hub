// demoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for your state
interface DemoState {
  value: number;
}

// Define the initial state
const initialState: DemoState = {
  value: 0,
};

// Create a slice
const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, setValue } = demoSlice.actions;

// Export the reducer
export default demoSlice.reducer;
