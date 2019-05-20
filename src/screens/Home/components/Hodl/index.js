import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';

import logo from '../../../../../assets/images/app-logo.png';
import { Amount } from '../../../../components';
import styles from './styles';

const Hodl = ({ favorites }) => {
  let total = 0;
  favorites.forEach(({ hodl = 0, price = 0 }) => total += hodl ? (parseFloat(hodl, 10) * price) : 0); // eslint-disable-line

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Amount style={styles.amount} value={total} />
    </View>
  );
};

Hodl.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})),
};

Hodl.defaultProps = {
  favorites: [],
};

const mapStateToProps = ({ favorites }) => ({
  favorites,
});

export default connect(mapStateToProps)(Hodl);
