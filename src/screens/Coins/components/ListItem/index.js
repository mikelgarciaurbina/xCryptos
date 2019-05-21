import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Text, View } from 'react-native';

import styles from './styles';

const CoinListItem = ({ coin = {}, favorite, onChange }) => (
  <View style={[styles.row, styles.list]}>
    <Text style={styles.name}>{coin.name}</Text>
    <Switch
      style={styles.switcher}
      onValueChange={() => onChange({ coin, favorite })}
      value={favorite}
    />
  </View>
);
CoinListItem.propTypes = {
  coin: PropTypes.shape(),
  favorite: PropTypes.bool,
  onChange: PropTypes.func,
};
CoinListItem.defaultProps = {
  coin: {},
  favorite: false,
  onChange: undefined,
};

export default CoinListItem;
