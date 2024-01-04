import React from 'react';
import { Switch, Text, View } from 'react-native';
import styles from './styles';

const FieldsetSwitch = ({ label, caption, onChange, value }) => (
  <View style={styles.list}>
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.row}>
        <Text style={[styles.value, styles.caption]}>{caption}</Text>
        <Switch onValueChange={onChange} value={value} />
      </View>
    </View>
  </View>
);

export default FieldsetSwitch;
