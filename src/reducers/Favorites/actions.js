import {
  ADD_FAVORITE, REMOVE_FAVORITE, UPDATE_FAVORITE, UPDATE_PRICES,
} from './types';

export const addFavoriteAction = favorite => ({
  type: ADD_FAVORITE,
  favorite,
});

export const removeFavoriteAction = favorite => ({
  type: REMOVE_FAVORITE,
  favorite,
});

export const updateFavoriteAction = favorite => ({
  type: UPDATE_FAVORITE,
  favorite,
});

export const updatePricesAction = prices => ({
  type: UPDATE_PRICES,
  prices,
});
