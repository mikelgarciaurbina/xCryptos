import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../../../constants';

const {
  COLOR, FONT, OFFSET, UNIT,
} = THEME;

export default StyleSheet.create({
  active: {
    backgroundColor: THEME.BACKGROUND_HIGHLIGHT,
  },
  bar: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: UNIT * 0.1,
    marginRight: UNIT * 0.1,
    height: '100%',
  },
  bars: {
    height: UNIT * 9.6,
    width: '100%',
    marginVertical: UNIT / 2,
  },
  caption: {
    backgroundColor: 'transparent',
    color: COLOR.CHART,
    fontSize: FONT.SIZE.SMALL,
    fontWeight: FONT.WEIGHT.BOLD,
  },
  captionActive: {
    color: THEME.WHITE,
  },
  centered: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  chip: {
    backgroundColor: THEME.BACKGROUND_HIGHLIGHT,
    paddingVertical: UNIT * 0.375,
    paddingHorizontal: UNIT * 0.75,
    borderRadius: UNIT * 2,
    minHeight: OFFSET,
    minWidth: OFFSET,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: OFFSET,
    marginBottom: Platform.OS === 'ios' ? UNIT : 0,
  },
  option: {
    backgroundColor: 'transparent',
  },
  prices: {
    minHeight: UNIT * 2.6,
  },
  reverse: {
    flexDirection: 'row-reverse',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    flex: 1,
  },
  value: {
    minHeight: UNIT,
    borderRadius: UNIT / 2,
  },
});
