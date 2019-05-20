import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

const {
  FONT, OFFSET, UNIT, WHITE,
} = THEME;

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: WHITE,
  },
  content: {
    paddingVertical: OFFSET * 2,
    paddingHorizontal: OFFSET,
  },
  brandname: {
    tintColor: THEME.FONT_PRIMARY_COLOR,
    height: FONT.SIZE.LARGE,
    resizeMode: 'contain',
  },

  text: {
    color: THEME.COLOR_SECONDARY,
    fontSize: FONT.SIZE.SMALL,
    textAlign: 'center',
    maxWidth: '90%',
    marginTop: UNIT / 2,
  },
});

export default styles;
