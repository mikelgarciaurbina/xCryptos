import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, Text } from 'react-native';
import { LinearGradient } from 'expo';

import settingsIcon from '../../../assets/images/icon-settings.png';
import { C, THEME } from '../../constants';
import { ButtonIcon } from '../../components';
import { Hodl } from './components';
import styles from './styles';

const { PRIMARY } = THEME;

class HomeScreen extends Component {
  static navigationOptions = ({
    navigation: {
      navigate,
      state: { params: { backgroundColor = PRIMARY } = {} },
    },
  }) => ({
    headerLeft: <Hodl />,
    headerRight: (
      <ButtonIcon icon={settingsIcon} onPress={() => navigate('Settings')} style={styles.icon} />
    ),
    headerStyle: {
      backgroundColor,
      elevation: 0,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
  });

  render() {
    const {
      settings: { nightMode },
    } = this.props;

    return (
      <Fragment>
        <StatusBar animated backgroundColor={nightMode ? THEME.COLOR.BLACK : THEME.COLOR.PRIMARY} />
        <LinearGradient
          colors={nightMode ? THEME.GRADIENT_NIGHTMODE : THEME.GRADIENT}
          style={styles.screen}
        >
          <Text>Get started by opening</Text>
        </LinearGradient>
      </Fragment>
    );
  }
}
HomeScreen.propTypes = {
  settings: PropTypes.shape({}),
};
HomeScreen.defaultProps = {
  settings: C.DEFAULT.SETTINGS,
};

const mapStateToProps = ({ settings }) => ({
  settings,
});

export default connect(mapStateToProps)(HomeScreen);
