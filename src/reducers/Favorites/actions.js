import { UPDATE_FAVORITE } from './types';

export const updateFavoriteAction = favorite => ({
  type: UPDATE_FAVORITE,
  favorite,
});
