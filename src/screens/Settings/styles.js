import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

const {
  FONT, OFFSET, UNIT, WHITE,
} = THEME;

const styles = StyleSheet.create({
  brandname: {
    tintColor: THEME.FONT_PRIMARY_COLOR,
    height: FONT.SIZE.LARGE,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingVertical: OFFSET * 2,
    paddingHorizontal: OFFSET,
  },
  form: {
    flex: 1,
    borderBottomColor: THEME.BACKGROUND_DARK_HIGHLIGHT,
    borderBottomWidth: 1,
    borderTopColor: THEME.BACKGROUND_DARK_HIGHLIGHT,
    borderTopWidth: 1,
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
  screen: {
    flex: 1,
    backgroundColor: WHITE,
  },
  text: {
    color: THEME.COLOR_SECONDARY,
    fontSize: FONT.SIZE.SMALL,
    textAlign: 'center',
    maxWidth: '90%',
    marginTop: UNIT / 2,
  },
  value: {
    color: THEME.FONT_PRIMARY_COLOR,
    fontSize: FONT.SIZE.LARGE,
  },
});

export default styles;
