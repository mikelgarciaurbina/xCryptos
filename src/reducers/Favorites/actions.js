import { SET_FAVORITES, SET_FAVORITY } from './types';

export const setFavorites = data => ({
  type: SET_FAVORITES,
  data,
});

export const setFavority = data => ({
  type: SET_FAVORITY,
  data,
});
