import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Text, TouchableWithoutFeedback, View,
} from 'react-native';
import { connect } from 'react-redux';

import alertImage from '../../../../../assets/images/icon-alert.png';
import { Amount, CursorBlink } from '../../../../components';
import { C, THEME } from '../../../../constants';
import { parseCurrency } from '../../../../modules';
import styles from './styles';

const { LOCALE } = C;
const { TRANSPARENT } = THEME;

const ListItem = ({
  active,
  alerts,
  conversion = 0,
  coin,
  decimal,
  onFocus,
  onPress,
  settings: { locale = LOCALE },
  value,
}) => {
  const {
    hodl = 0, image, price = 0, total = 0, trend = 0,
  } = coin;
  const alert = alerts.find(item => item.coin === coin.coin);
  const valueConversion = value
    ? parseCurrency(parseFloat((conversion * value.replace(',', '')) / price), locale)
    : 0;

  return (
    <View style={[styles.container, active && styles.active]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.info}>
          <View style={styles.thumb}>
            {parseInt((trend * 100) / price, 10) !== 0 && (
              <View style={[styles.bullet, trend > 0 ? styles.green : styles.red]} />
            )}
            <View style={styles.imageWrap}>
              <Image style={styles.image} source={{ uri: image }} />
            </View>
            {alert && <Image style={styles.alert} source={alertImage} />}
          </View>
          <View style={styles.coin}>
            <Text style={styles.value}>{coin.coin}</Text>
            {hodl > 0 && <Amount style={styles.text} value={total} />}
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        underlayColor={TRANSPARENT}
        onPress={() => onFocus(value ? valueConversion : '1')}
      >
        <View style={styles.price}>
          {value && (
            <View style={styles.row}>
              <Text style={styles.value}>
                {active ? `${value}${decimal ? '.' : ''}` : valueConversion}
              </Text>
              {active && <CursorBlink />}
            </View>
          )}
          <View style={styles.row}>
            <Amount style={value ? styles.text : styles.value} value={price} />
            {active && value && value !== '1' && value !== '0' && (
              <View style={[styles.row, styles.centered]}>
                <Text style={[styles.text, styles.operation]}>{` x${value} `}</Text>
                <Text style={styles.text}>= </Text>
                <Amount style={styles.text} value={value.replace(',', '') * price} />
              </View>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

ListItem.propTypes = {
  active: PropTypes.bool,
  alerts: PropTypes.arrayOf(PropTypes.shape({})),
  conversion: PropTypes.number,
  coin: PropTypes.shape({}),
  decimal: PropTypes.bool,
  onFocus: PropTypes.func,
  onPress: PropTypes.func,
  settings: PropTypes.shape({}),
  value: PropTypes.string,
};

ListItem.defaultProps = {
  active: false,
  alerts: [],
  conversion: 1,
  coin: {},
  decimal: false,
  onFocus() {},
  onPress() {},
  settings: {},
  value: undefined,
};

const mapStateToProps = ({ alerts, settings }) => ({
  alerts,
  settings,
});

export default connect(mapStateToProps)(ListItem);
