import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { View as Motion } from 'react-native-animatable';
import { connect } from 'react-redux';

import { Touchable } from '../../../../components';
import { C, THEME } from '../../../../constants';
import { ServiceCoins } from '../../../../services';
import ChipPrice from '../ChipPrice';
import styles from './styles';

const {
  DEFAULT: { TIMELINE },
  TIMELINES,
} = C;
const { MOTION, COLOR } = THEME;

const Option = ({ active, caption, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={[styles.chip, styles.row, styles.option, active && styles.active]}>
      <Text style={[styles.caption, active && styles.captionActive]}>{caption}</Text>
    </View>
  </Touchable>
);
Option.propTypes = {
  active: PropTypes.bool,
  caption: PropTypes.string,
  onPress: PropTypes.func,
};
Option.defaultProps = {
  active: false,
  caption: '',
  onPress: undefined,
};

class Chart extends Component {
  state = {
    fetching: false,
    dataSource: undefined,
    price: undefined,
    timeline: TIMELINE,
    timestamp: undefined,
  };

  componentDidMount() {
    this.fetch();
  }

  componentWillReceiveProps({ coin: { coin } }) {
    const {
      coin: { coin: previousCoin },
    } = this.props;

    if (previousCoin !== coin) this.fetch({ coin });
  }

  fetch = async ({ coin, timeline } = {}) => {
    const {
      coin: { coin: coinProps },
      settings: { currency },
    } = this.props;
    const { timeline: timelineState } = this.state;

    this.setState({ fetching: true, timeline: timeline || timelineState });
    this.setState({
      fetching: false,
      dataSource: await ServiceCoins.history(
        coin || coinProps,
        timeline || timelineState,
        currency,
      ),
      timestamp: new Date().getTime(),
    });
  };

  onTimeline = (timeline) => {
    this.fetch({ timeline });
  };

  onValue = (price) => {
    this.setState({ price });
  };

  render() {
    const { coin } = this.props;
    const {
      fetching, dataSource = [], price, timeline, timestamp,
    } = this.state;

    let max = 0;
    let min = 0;
    let trend;
    if (!fetching && dataSource.length > 0) {
      max = Math.max.apply(null, dataSource.map(({ value }) => value));
      min = Math.min.apply(null, dataSource.map(({ value }) => value));
      trend = dataSource.find(({ value }) => value === max || value === min).value === max;
    }
    const diff = max - min;

    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.prices, trend && styles.reverse]}>
          <ChipPrice context="low" price={coin.price} value={min} />
          <View style={[styles.centered, styles.space]}>
            {price && <ChipPrice value={price} />}
          </View>
          <ChipPrice context="high" price={coin.price} value={max} />
        </View>
        <View style={[styles.row, styles.bars]}>
          {dataSource.map(({ value }, index) => {
            let color = COLOR.CHART;
            if (value === min) color = COLOR.RED;
            if (value === max) color = COLOR.GREEN;
            const key = `${timeline}-${timestamp}-${index}`;
            const height = fetching ? 0 : ((value - min) * 100) / diff;

            return (
              <TouchableOpacity
                key={key}
                onPressIn={() => this.onValue(value)}
                onPressOut={() => this.onValue()}
                style={styles.bar}
              >
                <Motion
                  {...MOTION.DEFAULT}
                  delay={index * 5}
                  style={[styles.value, { height: `${height}%`, backgroundColor: color }]}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.row}>
          {TIMELINES.map(key => (
            <Option
              active={key === timeline}
              caption={key}
              key={key}
              onPress={() => !fetching && this.onTimeline(key)}
            />
          ))}
        </View>
      </View>
    );
  }
}
Chart.propTypes = {
  coin: PropTypes.shape({}),
  settings: PropTypes.shape({}),
};
Chart.defaultProps = {
  coin: undefined,
  settings: undefined,
};

const mapStateToProps = ({ settings }) => ({
  settings,
});

export default connect(mapStateToProps)(Chart);
