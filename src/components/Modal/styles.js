import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

export default StyleSheet.create({
  background: {
    backgroundColor: THEME.MODAL_BACKGROUND,
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    width: '100%',
  },
  centered: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  close: {
    marginLeft: THEME.UNIT * -2.8,
    marginRight: 0,
    opacity: 0.5,
  },
  container: {
    backgroundColor: THEME.WHITE,
    borderTopLeftRadius: THEME.UNIT,
    borderTopRightRadius: THEME.UNIT,
    paddingVertical: THEME.OFFSET,
  },
  content: {
    borderTopColor: THEME.BACKGROUND_DARK_HIGHLIGHT,
    borderTopWidth: 1,
  },
  header: {
    marginBottom: THEME.OFFSET,
    paddingHorizontal: THEME.OFFSET,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: THEME.FONT.SIZE.LARGE,
    fontWeight: THEME.FONT.WEIGHT.BOLD,
    textAlign: 'center',
  },
});
