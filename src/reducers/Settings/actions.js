import { UPDATE_SETTINGS } from './types';

export const updateSettingsAction = settings => ({
  type: UPDATE_SETTINGS,
  settings,
});
