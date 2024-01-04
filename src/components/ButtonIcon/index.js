import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import Touchable from '../Touchable';
import styles from './styles';

const ButtonIcon = ({ icon, onPress, style }) => (
  <Touchable onPress={onPress}>
    <Image style={[styles.icon, style]} source={icon} />
  </Touchable>
);

export default ButtonIcon;
