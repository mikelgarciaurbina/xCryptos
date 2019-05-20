import { StyleSheet } from 'react-native';
import { THEME } from '../../../../constants';

const {
  CONTRAST, WHITE, FONT, UNIT, OFFSET,
} = THEME;

export default StyleSheet.create({
  button: {
    marginLeft: 0,
    marginRight: 0,
    tintColor: WHITE,
  },
  chip: {
    backgroundColor: THEME.BACKGROUND_HIGHLIGHT,
    paddingVertical: UNIT * 0.375,
    paddingHorizontal: UNIT * 0.75,
    borderRadius: UNIT * 2,
    minHeight: OFFSET,
    minWidth: OFFSET,
  },
  coin: {
    flex: 1,
  },
  container: {
    paddingVertical: OFFSET,
  },
  header: {
    marginHorizontal: OFFSET,
    marginBottom: UNIT * 2,
  },
  hodl: {
    fontSize: FONT.SIZE.SMALL,
    color: CONTRAST,
  },
  name: {
    fontSize: FONT.SIZE.EXTRA_LARGE,
    fontWeight: FONT.WEIGHT.BOLD,
    marginRight: UNIT / 2,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: WHITE,
    backgroundColor: 'transparent',
  },
  trend: {
    fontSize: FONT.SIZE.SMALL,
    fontWeight: FONT.WEIGHT.BOLD,
    color: CONTRAST,
  },
});
