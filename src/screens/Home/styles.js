import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

const { WHITE } = THEME;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.WHITE,
    flex: 1,
  },
  icon: {
    tintColor: WHITE,
  },
  list: {
    flex: 1,
    width: '100%',
  },
  screen: {
    flex: 1,
    backgroundColor: THEME.WHITE,
  },
});

export default styles;
