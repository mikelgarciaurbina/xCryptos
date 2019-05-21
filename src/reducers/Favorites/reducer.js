import { C } from '../../constants';
import {
  ADD_FAVORITE, REMOVE_FAVORITE, UPDATE_FAVORITE, UPDATE_PRICES,
} from './types';

const {
  DEFAULT: { FAVORITES },
} = C;

const initialState = FAVORITES;

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.favorite];
    case REMOVE_FAVORITE:
      return state.filter(({ coin }) => coin !== action.favorite.coin);
    case UPDATE_FAVORITE:
      return state.map(fav => (fav.coin !== action.favorite.coin
        ? fav
        : { ...fav, ...action.favorite, total: fav.price * (action.favorite.hodl || 0) }));
    case UPDATE_PRICES:
      return state.map(item => ({
        ...item,
        total: action.prices[item.coin].price * (item.hodl || 0),
        trend: action.prices[item.coin].trend,
        price: action.prices[item.coin].price,
      }));
    default:
      return state;
  }
}
