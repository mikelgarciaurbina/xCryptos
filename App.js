import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore } from 'redux';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
  AppLoading, Asset, Font, Icon,
} from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import indexReducer from './src/reducers';
import { THEME } from './src/constants';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(combineReducers(indexReducer), composeEnhancers);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
        require('./assets/images/app-logo.png'), // eslint-disable-line
        require('./assets/images/icon-alert.png'), // eslint-disable-line
        require('./assets/images/icon-back.png'), // eslint-disable-line
        require('./assets/images/icon-close.png'), // eslint-disable-line
        require('./assets/images/icon-settings.png'), // eslint-disable-line
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'), // eslint-disable-line
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { skipLoadingScreen } = this.props;
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar backgroundColor={THEME.PRIMARY} barStyle="light-content" />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}
App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};
App.defaultProps = {
  skipLoadingScreen: false,
};
