import React, { useEffect, useState } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { View as Motion } from 'react-native-animatable';

import deleteImg from '../../../../../assets/images/icon-delete.png';

import { ButtonIcon, Touchable } from '../../../../components';
import { THEME } from '../../../../constants';
import styles from './styles';

const { MOTION } = THEME;
const NUMBERS = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const Button = ({ caption, icon, value, onPress }) => (
  <Touchable onPress={() => onPress(value)} underlayColor="rgba(0,0,0,0.1)">
    <View style={[styles.centered, styles.button]}>
      {icon ? (
        <ButtonIcon icon={icon} onPress={() => onPress(value)} style={styles.icon} />
      ) : (
        <Text style={styles.caption}>{caption || value.toString()}</Text>
      )}
    </View>
  </Touchable>
);

const Keyboard = ({ visible, decimal, onChange, onClose, value }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (visible) setLoaded(true);
    
    const handleBackPress = () => {
      onClose();
      return true;
    };

    if (visible) {
      const subscription = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => subscription.remove();
    }
  }, [onClose, visible]);

  const onNumber = (digit) => {
    let nextValue = digit;

    nextValue = `${value !== '0' || decimal ? value : ''}${decimal ? '.' : ''}${digit}`;
    onChange({ value: nextValue, decimal: false });
  };

  onDelete = () => {
    let nextValue = '0';

    if (value.length > 1) nextValue = decimal ? value : value.slice(0, -1);
    onChange({ value: nextValue, decimal: false });
  };

  onDecimal = () => {
    onChange({ value, decimal: !value.includes('.') });
  };

  return (
    <Motion
      {...MOTION.DEFAULT}
      animation={visible ? 'bounceInUp' : 'bounceOutDown'}
      style={loaded ? styles.container : undefined}
    >
      {loaded && (
        <View style={[styles.centered, styles.content]}>
          {NUMBERS.map((num) => (
            <Button key={num} value={num} onPress={onNumber} />
          ))}
          <Button caption="." onPress={onDecimal} />
          <Button value={0} onPress={onNumber} />
          <Button icon={deleteImg} onPress={onDelete} />
        </View>
      )}
    </Motion>
  );
};

export default Keyboard;
