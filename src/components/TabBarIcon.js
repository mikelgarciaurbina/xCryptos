import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

const TabBarIcon = ({ focused, name }) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);
TabBarIcon.propTypes = {
  focused: PropTypes.bool,
  name: PropTypes.string,
};
TabBarIcon.defaultProps = {
  focused: {},
  name: undefined,
};

export default TabBarIcon;
