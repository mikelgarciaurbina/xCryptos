import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

HomeStack.navigationOptions = {};

export default HomeStack;
