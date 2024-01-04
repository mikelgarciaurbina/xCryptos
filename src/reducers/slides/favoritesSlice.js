import { createSlice } from '@reduxjs/toolkit';

import { C } from '../../constants';

const {
  DEFAULT: { FAVORITES },
} = C;

const initialState = FAVORITES;

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      return [...state, action.payload];
    },
    removeFavorite: (state, action) => {
      return state.filter(({ coin }) => coin !== action.payload.coin);
    },
    updateFavorite: (state, action) => {
      return state.map((fav) =>
        fav.coin !== action.payload.coin
          ? fav
          : { ...fav, ...action.payload, total: fav.price * (action.payload.hodl || 0) }
      );
    },
    updatePrices: (state, action) => {
      return state.map((item) => ({
        ...item,
        total: action.payload[item.coin].price * (item.hodl || 0),
        trend: action.payload[item.coin].trend,
        price: action.payload[item.coin].price,
      }));
    },
  },
});

export const { addFavorite, removeFavorite, updateFavorite, updatePrices } = favoritesSlice.actions;
export default favoritesSlice.reducer;
