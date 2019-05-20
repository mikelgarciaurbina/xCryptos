import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import settingsIcon from '../../../assets/images/icon-settings.png';
import { THEME } from '../../constants';
import { ButtonIcon } from '../../components';
import { Hodl } from './components';
import styles from './styles';

const { PRIMARY } = THEME;

export default class HomeScreen extends React.Component {
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
    return (
      <SafeAreaView style={styles.container}>
        <Text>Get started by opening</Text>
      </SafeAreaView>
    );
  }
}
