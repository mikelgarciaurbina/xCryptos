import { C } from '../../constants';
import {
  UPDATE_SETTINGS,
} from './types';

const { DEFAULT: { SETTINGS } } = C;

const initialState = SETTINGS;

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        ...action.settings,
      };
    default:
      return state;
  }
}
