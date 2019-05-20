import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

const { UNIT } = THEME;

export default StyleSheet.create({
  disabled: {
    color: THEME.COLOR_SECONDARY,
  },
  input: {
    fontSize: THEME.FONT.SIZE.LARGE,
    paddingVertical: UNIT,
    paddingHorizontal: UNIT / 4,
    width: '100%',
  },
});
