import { StyleSheet } from 'react-native';

import { THEME } from '../../../../constants';

export default StyleSheet.create({
  caption: {
    color: THEME.FONT_PRIMARY_COLOR,
    fontSize: THEME.FONT.SIZE.NORMAL,
  },
  list: {
    backgroundColor: THEME.WHITE,
    borderBottomColor: THEME.BACKGROUND_DARK_HIGHLIGHT,
    borderBottomWidth: 1,
    paddingHorizontal: THEME.OFFSET,
    paddingVertical: THEME.UNIT,
  },
  hint: {
    color: THEME.COLOR_SECONDARY,
    fontSize: THEME.FONT.SIZE.SMALL,
  },
});
