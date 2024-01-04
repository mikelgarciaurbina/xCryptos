import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, View } from 'react-native';
import { View as Motion } from 'react-native-animatable';

import alertImg from '../../../../../assets/images/icon-alert.png';
import { Amount, ButtonIcon, Touchable } from '../../../../components';
import { THEME } from '../../../../constants';
import Chart from '../Chart';
import ModalHodl from '../ModalHodl';
import styles from './styles';

const { MOTION } = THEME;

const Info = ({ coin }) => {
  const [modal, setModal] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const favoriteCoin = favorites.find((item) => item.coin === coin);
  const { hodl = 0, name, price = 0, trend = 0 } = favoriteCoin;
  const trendPercentage = parseInt((trend * 100) / price, 10);

  const onModal = () => {
    setModal(!modal);
  };

  return (
    <Motion {...MOTION.DEFAULT} animation="bounceInUp" style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <Touchable onPress={onModal} style={styles.coin}>
          <View style={styles.coin}>
            <View style={styles.row}>
              <Text style={[styles.text, styles.name]}>{name}</Text>
              {trendPercentage !== 0 && (
                <View style={[styles.chip]}>
                  <Amount style={[styles.text, styles.trend]} symbol="%" value={trendPercentage} />
                </View>
              )}
            </View>
            <Text style={[styles.text, styles.hodl]}>
              {hodl > 0 ? `${hodl} ${favoriteCoin.coin}` : 'Tap for set your holdings'}
            </Text>
          </View>
        </Touchable>
        <ButtonIcon icon={alertImg} style={styles.button} />
      </View>
      <Chart coin={favoriteCoin} />
      <ModalHodl coin={favoriteCoin} onClose={onModal} visible={modal} />
    </Motion>
  );
};

export default Info;
