import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { View as Motion } from 'react-native-animatable';

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

const Chart = ({ coin }) => {
  const [fetching, setFetching] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [price, setPrice] = useState(null);
  const [timeline, setTimeline] = useState(TIMELINE);
  const [timestamp, setTimestamp] = useState(null);
  const { currency } = useSelector((state) => state.settings);

  let max = 0;
  let min = 0;
  let trend;
  if (!fetching && dataSource.length > 0) {
    max = Math.max.apply(
      null,
      dataSource.map(({ value }) => value)
    );
    min = Math.min.apply(
      null,
      dataSource.map(({ value }) => value)
    );
    trend = dataSource.find(({ value }) => value === max || value === min).value === max;
  }
  const diff = max - min;

  useEffect(() => {
    fetch();
  }, [coin]);

  const fetch = async ({ coin: newCoin, timeline: newTimeline } = {}) => {
    setFetching(true);
    setTimeline(newTimeline || timeline);
    const newDataSource = await ServiceCoins.history(newCoin || coin.coin, newTimeline || timeline, currency);
    setDataSource(newDataSource);
    setTimestamp(new Date().getTime());
    setFetching(false);
  };

  const onTimeline = (timeline) => {
    fetch({ timeline });
  };

  const onValue = (price) => {
    setPrice(price);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.prices, trend && styles.reverse]}>
        <ChipPrice context="low" price={coin.price} value={min} />
        <View style={[styles.centered, styles.space]}>{price && <ChipPrice value={price} />}</View>
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
            <Touchable key={key} onPressIn={() => onValue(value)} onPressOut={() => onValue(null)} style={styles.bar}>
              <Motion
                {...MOTION.DEFAULT}
                delay={index * 5}
                style={[styles.value, { height: `${height}%`, backgroundColor: color }]}
              />
            </Touchable>
          );
        })}
      </View>
      <View style={styles.row}>
        {TIMELINES.map((key) => (
          <Option active={key === timeline} caption={key} key={key} onPress={() => !fetching && onTimeline(key)} />
        ))}
      </View>
    </View>
  );
};

export default Chart;
