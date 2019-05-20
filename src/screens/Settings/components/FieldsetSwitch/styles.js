import { StyleSheet } from 'react-native';
import { THEME } from '../../../../constants';

const { FONT, OFFSET, UNIT } = THEME;

export default StyleSheet.create({
  caption: {
    flex: 1,
  },
  label: {
    color: THEME.COLOR_SECONDARY,
    fontSize: FONT.SIZE.SMALL,
    marginBottom: UNIT / 2,
  },
  list: {
    backgroundColor: THEME.WHITE,
    borderBottomColor: THEME.BACKGROUND_DARK_HIGHLIGHT,
    borderBottomWidth: 1,
    paddingHorizontal: OFFSET,
    paddingVertical: UNIT,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    color: THEME.FONT_PRIMARY_COLOR,
    fontSize: FONT.SIZE.LARGE,
  },
});
