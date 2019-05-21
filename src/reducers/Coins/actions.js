import { SAVE_COINS } from './types';

export const saveCoinsAction = coins => ({
  type: SAVE_COINS,
  coins,
});
