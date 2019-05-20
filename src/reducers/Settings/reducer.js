import { C } from '../../constants';
import {
  CHANGE_SETTINGS,
} from './types';

const { DEFAULT: { SETTINGS } } = C;

const initialState = SETTINGS;

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_SETTINGS:
      return [];
    default:
      return state;
  }
}
