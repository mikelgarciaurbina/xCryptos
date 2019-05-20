import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

HomeStack.navigationOptions = {};

export default HomeStack;
