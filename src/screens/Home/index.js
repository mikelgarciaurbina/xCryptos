import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Get started by opening</Text>
      </SafeAreaView>
    );
  }
}
