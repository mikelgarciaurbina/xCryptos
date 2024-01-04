import { StyleSheet } from 'react-native';

import { THEME } from '../../../../constants';

export default StyleSheet.create({
  name: {
    flex: 1,
    fontSize: THEME.FONT.SIZE.NORMAL,
  },
  list: {
    backgroundColor: THEME.WHITE,
    borderBottomColor: THEME.BACKGROUND_DARK_HIGHLIGHT,
    borderBottomWidth: 1,
    paddingHorizontal: THEME.OFFSET,
    paddingVertical: THEME.UNIT,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
