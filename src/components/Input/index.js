import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

const Input = ({ style, ...inherit }) => (
  <TextInput
    keyboardType="numeric"
    autoCorrect={false}
    autoCapitalize="none"
    underlineColorAndroid="transparent"
    placeholderTextColor={undefined}
    {...inherit}
    style={[styles.input, !inherit.editable && styles.disabled, style]}
  />
);

export default Input;
