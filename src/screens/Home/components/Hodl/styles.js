import { StyleSheet } from 'react-native';
import { THEME } from '../../../../constants';

const {
  FONT, UNIT, OFFSET, WHITE,
} = THEME;

export default StyleSheet.create({
  amount: {
    color: WHITE,
    fontSize: FONT.SIZE.LARGE,
    fontWeight: FONT.WEIGHT.BOLD,
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: OFFSET,
  },
  logo: {
    width: UNIT * 3.6,
    resizeMode: 'contain',
    marginRight: UNIT,
  },
  row: {
  },
});
