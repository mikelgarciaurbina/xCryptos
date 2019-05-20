import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import PKG from '../../../package.json';
import brandnameImg from '../../../assets/images/app-brandname.png';
import addImg from '../../../assets/images/icon-add.png';
import { THEME } from '../../constants';
import { ButtonIcon } from '../../components';
import styles from './styles';

const { version } = PKG;

class SettingsScreen extends Component {
  static navigationOptions({ navigation: { navigate } }) {
    return {
      title: 'Settings',
      headerRight: <ButtonIcon icon={addImg} onPress={() => navigate('Coins')} />,
      headerStyle: { backgroundColor: THEME.WHITE },
      headerTintColor: THEME.BLACK,
    };
  }

  onChangeValue = ({ value, decimal }) => {
    console.log(value, decimal);
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={[styles.centered, styles.content]}>
          <Image style={styles.brandname} source={brandnameImg} />
          <Text style={styles.text}>{`v${version}`}</Text>
        </View>
      </View>
    );
  }
}

export default SettingsScreen;
