import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { View as Motion } from 'react-native-animatable';
import { THEME } from '../../../../constants';
import { Amount } from '../../../../components';
import styles from './styles';

const { MOTION } = THEME;

const ChipPrice = ({ context, price, value }) => (
  <Motion
    {...MOTION.DEFAULT}
    animation={value > 0 ? 'bounceIn' : 'bounceOut'}
    style={[styles.chip, styles[context]]}
  >
    {value > 0 && (
      <View style={styles.row}>
        <View style={styles.margin}>
          <Amount style={styles.value} value={value} />
        </View>
        {!!price && (
          <Amount
            style={styles.label}
            value={parseInt((value * 100) / price - 100, 10)}
            symbol="%"
          />
        )}
      </View>
    )}
  </Motion>
);

ChipPrice.propTypes = {
  context: PropTypes.string,
  price: PropTypes.number,
  value: PropTypes.number,
};

ChipPrice.defaultProps = {
  context: undefined,
  price: undefined,
  value: 0,
};

export default ChipPrice;
