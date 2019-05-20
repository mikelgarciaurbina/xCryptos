import React from 'react';
import PropTypes from 'prop-types';
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
    style={[
      styles.input,
      (!inherit.editable && styles.disabled),
      style,
    ]}
  />
);
Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.object]),
};
Input.defaultProps = {
  style: [],
};

export default Input;
