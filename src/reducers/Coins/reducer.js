import { SAVE_COINS } from './types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_COINS:
      return action.coins;
    default:
      return state;
  }
}
