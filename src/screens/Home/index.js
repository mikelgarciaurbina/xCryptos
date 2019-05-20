import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { THEME } from '../../constants';
import styles from './styles';

const { PRIMARY } = THEME;

export default class HomeScreen extends React.Component {
  static navigationOptions = ({
    navigation: { state: { params: { backgroundColor = PRIMARY } = {} } },
  }) => ({
    headerStyle: {
      backgroundColor,
      elevation: 0,
      shadowColor: 'transparent',
      shadowRadius: 0,
      shadowOffset: {
        height: 0,
      },
    },
  })

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Get started by opening</Text>
      </SafeAreaView>
    );
  }
}
