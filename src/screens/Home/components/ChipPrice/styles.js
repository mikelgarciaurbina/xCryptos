import { StyleSheet } from 'react-native';

import { THEME } from '../../../../constants';

const {
  CONTRAST, COLOR, FONT, OFFSET, UNIT, WHITE,
} = THEME;

export default StyleSheet.create({
  chip: {
    backgroundColor: THEME.BACKGROUND_HIGHLIGHT,
    paddingVertical: UNIT * 0.375,
    paddingHorizontal: UNIT * 0.75,
    borderRadius: UNIT * 2,
    minHeight: OFFSET,
    minWidth: OFFSET,
  },
  high: {
    backgroundColor: COLOR.GREEN,
  },
  label: {
    color: CONTRAST,
    fontSize: FONT.SIZE.SMALL,
  },
  low: {
    backgroundColor: COLOR.RED,
  },
  margin: {
    marginRight: UNIT / 2,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    fontSize: FONT.SIZE.SMALL,
    fontWeight: FONT.WEIGHT.BOLD,
    color: WHITE,
  },
});
