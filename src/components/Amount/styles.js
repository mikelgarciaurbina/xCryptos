import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    opacity: 0.75,
    transform: [{ scale: 0.75 }],
  },
});
