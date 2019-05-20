import { StyleSheet } from 'react-native';

import { THEME } from '../../../../constants';

const { OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  input: {
    color: THEME.FONT_PRIMARY_COLOR,
    textAlign: 'center',
    fontSize: THEME.FONT.SIZE.EXTRA_LARGE * 2,
    fontWeight: THEME.FONT.WEIGHT.LIGHT,
    marginBottom: OFFSET,
  },
  listItem: {
    backgroundColor: THEME.WHITE,
    borderBottomColor: THEME.BACKGROUND_DARK_HIGHLIGHT,
    borderBottomWidth: 1,
    paddingHorizontal: OFFSET,
    paddingVertical: UNIT,
  },
});
