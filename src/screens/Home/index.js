import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, RefreshControl, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

import settingsIcon from '../../../assets/images/icon-settings.png';
import { C, THEME } from '../../constants';
import { ButtonIcon } from '../../components';
import {
  Hodl, Info, Keyboard, ListItem,
} from './components';
import styles from './styles';

const {
  DEFAULT: { FAVORITES, SETTINGS },
} = C;
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

  state = {
    coin: undefined,
    keyboard: false,
    decimal: false,
    prefetch: false,
    refreshing: false,
    value: undefined,
  };

  fetch = () => {
    console.log('YEAH');
  };

  onChangeValue = ({ value, decimal }) => {
    this.setState({ value, decimal });
  };

  render() {
    const {
      favorites,
      navigation,
      settings: { nightMode },
    } = this.props;
    const {
      coin: { coin: currentCoin, price } = {},
      decimal,
      keyboard,
      prefetch,
      refreshing,
      value,
    } = this.state;

    return (
      <Fragment>
        <StatusBar animated backgroundColor={nightMode ? THEME.COLOR.BLACK : THEME.COLOR.PRIMARY} />
        <LinearGradient
          colors={nightMode ? THEME.GRADIENT_NIGHTMODE : THEME.GRADIENT}
          style={styles.screen}
        >
          <FlatList
            data={favorites}
            extraData={this.state}
            keyExtractor={item => item.coin}
            refreshControl={(
              <RefreshControl
                refreshing={refreshing && prefetch}
                onRefresh={this.fetch}
                tintColor={THEME.WHITE}
              />
)}
            renderItem={({ item }) => (
              <ListItem
                active={currentCoin === item.coin}
                coin={item}
                decimal={decimal}
                conversion={price}
                onFocus={newValue => this.setState({ coin: item, keyboard: true, value: newValue })}
                onPress={() => this.setState({ coin: item, keyboard: false, value: undefined })}
                value={value}
              />
            )}
            style={styles.list}
          />
          {currentCoin && !keyboard && <Info coin={currentCoin} navigation={navigation} />}
          {currentCoin && (
            <Keyboard
              visible={keyboard}
              decimal={decimal}
              onChange={this.onChangeValue}
              onClose={() => this.setState({ keyboard: false, value: undefined })}
              value={value}
            />
          )}
        </LinearGradient>
      </Fragment>
    );
  }
}
HomeScreen.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})),
  navigation: PropTypes.shape({}),
  settings: PropTypes.shape({}),
};
HomeScreen.defaultProps = {
  favorites: FAVORITES,
  navigation: {},
  settings: SETTINGS,
};

const mapStateToProps = ({ favorites, settings }) => ({
  favorites: favorites.sort((a, b) => {
    if (a.total === 0 && b.total === 0) return a.rank > b.rank ? 0 : -1;
    return a.total < b.total ? 0 : -1;
  }),
  settings,
});

export default connect(mapStateToProps)(HomeScreen);
