import { StyleSheet } from 'react-native';

import { THEME } from '../../constants';

const { WHITE } = THEME;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    tintColor: WHITE,
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

export default styles;
