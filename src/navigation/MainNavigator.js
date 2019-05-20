import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

HomeStack.navigationOptions = {};

export default HomeStack;
