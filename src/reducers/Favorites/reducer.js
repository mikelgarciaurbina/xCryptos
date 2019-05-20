import { C } from '../../constants';
import {
  SET_FAVORITES,
  SET_FAVORITY,
} from './types';

const { DEFAULT: { FAVORITES } } = C;

const initialState = FAVORITES;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FAVORITES:
      return [];
    case SET_FAVORITY:
      return [];
    default:
      return state;
  }
}
