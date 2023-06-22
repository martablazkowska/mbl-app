import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    set: (state, action) => {
      state = action.payload;
    },
  },
});

export const { reset, set } = user.actions;
export default user.reducer;
