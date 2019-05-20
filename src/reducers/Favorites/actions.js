import { UPDATE_FAVORITE, UPDATE_PRICES } from './types';

export const updateFavoriteAction = favorite => ({
  type: UPDATE_FAVORITE,
  favorite,
});

export const updatePricesAction = prices => ({
  type: UPDATE_PRICES,
  prices,
});
