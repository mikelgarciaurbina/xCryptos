import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Text, View } from 'react-native';
import styles from './styles';

const FieldsetSwitch = ({
  label,
  caption,
  onChange,
  value,
}) => (
  <View style={styles.list}>
    <View>
      { label && <Text style={styles.label}>{label}</Text> }
      <View style={styles.row}>
        <Text style={[styles.value, styles.caption]}>{caption}</Text>
        <Switch onValueChange={onChange} value={value} />
      </View>
    </View>
  </View>
);
FieldsetSwitch.propTypes = {
  caption: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};
FieldsetSwitch.defaultProps = {
  caption: undefined,
  label: undefined,
  onChange() {},
  value: false,
};

export default FieldsetSwitch;
