import { CHANGE_SETTINGS } from './types';

export const changeSettings = data => ({
  type: CHANGE_SETTINGS,
  data,
});
