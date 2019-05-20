import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { C } from '../../constants';
import { parseCurrency } from '../../modules';
import styles from './styles';

const {
  CURRENCY: { USD },
  SYMBOL,
} = C;

export const Amount = ({
  settings: { currency }, style, symbol, value,
}) => (
  <View style={styles.container}>
    {symbol && value > 0 && <Text style={style}>+</Text>}
    {!symbol && currency === USD && <Text style={[style, styles.symbol]}>{SYMBOL.USD}</Text>}
    <Text style={style}>{symbol !== '%' ? parseCurrency(value) : value}</Text>
    {(symbol || currency !== USD) && (
      <Text style={[style, styles.symbol]}>{symbol || SYMBOL[currency]}</Text>
    )}
  </View>
);
Amount.propTypes = {
  settings: PropTypes.shape({}),
  style: PropTypes.shape({}),
  symbol: PropTypes.string,
  value: PropTypes.number,
};
Amount.defaultProps = {
  settings: {},
  style: undefined,
  symbol: undefined,
  value: 0,
};

const mapStateToProps = ({ settings }) => ({
  settings,
});

export default connect(mapStateToProps)(Amount);
