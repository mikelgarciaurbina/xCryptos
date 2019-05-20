import { C } from '../../constants';
import { UPDATE_FAVORITE } from './types';

const {
  DEFAULT: { FAVORITES },
} = C;

const initialState = FAVORITES;

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_FAVORITE:
      return state.map(fav => (fav.coin !== action.favorite.coin
        ? fav
        : { ...fav, ...action.favorite, total: fav.price * (action.favorite.hodl || 0) }));
    default:
      return state;
  }
}
