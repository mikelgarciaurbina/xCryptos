import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const coinsSlice = createSlice({
  name: 'coinsSlice',
  initialState,
  reducers: {
    saveCoins: (state, action) => {
      return action.payload;
    },
  },
});

export const { saveCoins } = coinsSlice.actions;
export default coinsSlice.reducer;
