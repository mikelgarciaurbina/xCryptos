import { createSlice } from '@reduxjs/toolkit';

import { C } from '../../constants';

const {
  DEFAULT: { SETTINGS },
} = C;

const initialState = SETTINGS;

const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    updateSettings: (state, action) => {
      state.currency = action?.payload?.currency || state.currency;
      state.locale = action?.payload?.locale || state.locale;
      state.nightMode = action?.payload?.nightMode ?? state.nightMode;
    },
  },
});

export const { updateSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
