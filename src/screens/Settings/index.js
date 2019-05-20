import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { Image, Text, View } from 'react-native';

import PKG from '../../../package.json';
import brandnameImg from '../../../assets/images/app-brandname.png';
import addImg from '../../../assets/images/icon-add.png';
import { C, THEME } from '../../constants';
import { ButtonIcon, Touchable } from '../../components';
import { updateSettingsAction } from '../../reducers/Settings/actions';
import { FieldsetSwitch } from './components';
import styles from './styles';

const { version } = PKG;
const {
  CURRENCY: { USD },
} = C;

class SettingsScreen extends Component {
  static navigationOptions({ navigation: { navigate } }) {
    return {
      title: 'Settings',
      headerRight: <ButtonIcon icon={addImg} onPress={() => navigate('Coins')} />,
      headerStyle: { backgroundColor: THEME.WHITE },
      headerTintColor: THEME.BLACK,
    };
  }

  state = {
    modal: false,
  };

  onModal = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  };

  onNightMode = (nightMode) => {
    const { navigation, updateSettings } = this.props;
    updateSettings({ nightMode });
    navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    }));
  }

  render() {
    const {
      settings: { currency = USD, nightMode = false },
    } = this.props;

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
      </View>
    );
  }
}
SettingsScreen.propTypes = {
  navigation: PropTypes.shape({}),
  settings: PropTypes.shape({}),
  updateSettings: PropTypes.func,
};
SettingsScreen.defaultProps = {
  navigation: {},
  settings: {},
  updateSettings() {},
};

const mapStateToProps = ({ favorites, settings = {} }) => ({
  favorites,
  settings,
});

const mapDispatchToProps = dispatch => ({
  updateSettings: settings => dispatch(updateSettingsAction(settings)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
