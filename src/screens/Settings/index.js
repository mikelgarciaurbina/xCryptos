import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  Image, Linking, Platform, Text, View,
} from 'react-native';

import PKG from '../../../package.json';
import brandnameImg from '../../../assets/images/app-brandname.png';
import addImg from '../../../assets/images/icon-add.png';
import backIosImg from '../../../assets/images/icon-back-ios.png';
import backImg from '../../../assets/images/icon-back.png';

import { C, THEME } from '../../constants';
import { ServiceCoins } from '../../services';
import { updatePricesAction } from '../../reducers/Favorites/actions';
import { updateSettingsAction } from '../../reducers/Settings/actions';
import { ButtonIcon, Touchable } from '../../components';

import { FieldsetSwitch, ModalCurrency } from './components';
import styles from './styles';

const { version } = PKG;
const {
  CURRENCY: { USD },
} = C;

class SettingsScreen extends Component {
  static navigationOptions({ navigation: { goBack, navigate } }) {
    return {
      title: 'Settings',
      headerLeft: (
        <ButtonIcon icon={Platform.OS === 'ios' ? backIosImg : backImg} onPress={() => goBack()} />
      ),
      headerRight: <ButtonIcon icon={addImg} onPress={() => navigate('Coins')} />,
      headerStyle: { backgroundColor: THEME.WHITE },
      headerTintColor: THEME.BLACK,
    };
  }

  state = {
    modal: false,
  };

  onCurrency = (currency) => {
    const { favorites, updatePrices, updateSettings } = this.props;
    this.setState({ modal: false });
    updateSettings({
      currency,
    });
    ServiceCoins.prices(favorites.map(({ coin }) => coin), currency).then(updatePrices);
  };

  onModal = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  };

  onNightMode = (nightMode) => {
    const { navigation, updateSettings } = this.props;
    updateSettings({ nightMode });
    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      }),
    );
  };

  onPrivacy = () => {
    const url = 'https://www.freeprivacypolicy.com/privacy/view/a3fa5810636f376e3da75f8f1ad775b6';
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) Linking.openURL(url);
      })
      .catch(() => {});
  };

  render() {
    const {
      settings: { currency = USD, nightMode = false },
    } = this.props;
    const { modal } = this.state;

    return (
      <View style={styles.screen}>
        <View style={[styles.centered, styles.content]}>
          <Image style={styles.brandname} source={brandnameImg} />
          <Text style={styles.text}>{`v${version}`}</Text>
        </View>
        <View style={styles.form}>
          <Touchable onPress={this.onModal}>
            <View style={styles.list}>
              <Text style={styles.label}>Local currency</Text>
              <Text style={styles.value}>{currency}</Text>
            </View>
          </Touchable>
          <FieldsetSwitch
            caption="Night Mode"
            label="Theme"
            onChange={this.onNightMode}
            value={nightMode}
          />
        </View>
        <View style={[styles.centered, styles.content]}>
          <Text style={styles.text}>❤️</Text>
          <Text style={styles.text}>
            Made by a small band of superheroes in Basque Country. Thank you for your support!
          </Text>
          <Touchable onPress={this.onPrivacy}>
            <Text style={[styles.text, styles.privacy]}>Privacy Policy</Text>
          </Touchable>
        </View>
        <ModalCurrency onClose={this.onModal} onValue={this.onCurrency} visible={modal} />
      </View>
    );
  }
}
SettingsScreen.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({})),
  navigation: PropTypes.shape({}),
  settings: PropTypes.shape({}),
  updatePrices: PropTypes.func,
  updateSettings: PropTypes.func,
};
SettingsScreen.defaultProps = {
  favorites: [],
  navigation: {},
  settings: {},
  updatePrices() {},
  updateSettings() {},
};

const mapStateToProps = ({ favorites, settings = {} }) => ({
  favorites,
  settings,
});

const mapDispatchToProps = dispatch => ({
  updatePrices: prices => prices && dispatch(updatePricesAction(prices)),
  updateSettings: settings => dispatch(updateSettingsAction(settings)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsScreen);
