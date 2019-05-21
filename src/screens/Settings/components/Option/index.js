import { func, string } from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import { Touchable } from '../../../../components';
import styles from './styles';

const Option = ({
  caption, onPress, hint,
}) => (
  <Touchable onPress={onPress}>
    <View style={[styles.list, styles.option]}>
      <Text style={styles.caption}>{caption}</Text>
      { hint && <Text style={styles.hint}>{hint}</Text> }
    </View>
  </Touchable>
);
Option.propTypes = {
  caption: string,
  hint: string,
  onPress: func,
};
Option.defaultProps = {
  caption: undefined,
  hint: undefined,
  onPress: undefined,
};

export default Option;
