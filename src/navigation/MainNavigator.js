import { createStackNavigator } from 'react-navigation';

import CoinsScreen from '../screens/Coins';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';

const HomeStack = createStackNavigator(
  {
    Coins: CoinsScreen,
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

HomeStack.navigationOptions = {};

export default HomeStack;
