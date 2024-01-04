import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { C } from '../../constants';
import { parseCurrency } from '../../modules';
import styles from './styles';

const {
  CURRENCY: { USD },
  SYMBOL,
} = C;

export const Amount = ({ style, symbol, value }) => {
  const { currency } = useSelector((state) => state.settings);

  return (
    <View style={styles.container}>
      {symbol && value > 0 && <Text style={style}>+</Text>}
      {!symbol && currency === USD && <Text style={[style, styles.symbol]}>{SYMBOL.USD}</Text>}
      <Text style={style}>{symbol !== '%' ? parseCurrency(value) : value}</Text>
      {(symbol || currency !== USD) && <Text style={[style, styles.symbol]}>{symbol || SYMBOL[currency]}</Text>}
    </View>
  );
};

export default Amount;
