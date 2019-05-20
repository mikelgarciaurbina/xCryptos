import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const MonoText = ({ style, ...props }) => (
  <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />
);
MonoText.propTypes = {
  style: PropTypes.shape({}),
};
MonoText.defaultProps = {
  style: {},
};

export default MonoText;
