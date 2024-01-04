import React from 'react';
import { useSelector } from 'react-redux';
import { Image, View } from 'react-native';

import logo from '../../../../../assets/images/app-logo.png';
import { Amount } from '../../../../components';
import styles from './styles';

const Hodl = () => {
  const favorites = useSelector((state) => state.favorites);
  let total = 0;
  favorites?.forEach(({ hodl = 0, price = 0 }) => (total += hodl ? parseFloat(hodl, 10) * price : 0));

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Amount style={styles.amount} value={total} />
    </View>
  );
};

export default Hodl;
