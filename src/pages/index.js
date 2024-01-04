import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { THEME } from '../constants';
import CoinsScreen, { CoinsHeaderLeftButton } from './Coins';
import HomeScreen, { HeaderRightButton, Hodl } from './Home';
import SettingsScreen, { SettingsHeaderLeftButton, SettingsHeaderRightButton } from './Settings';

const { BLACK, PRIMARY, WHITE } = THEME;

const Stack = createNativeStackNavigator();

export default function Pages() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: PRIMARY,
            },
            headerShadowVisible: false,
            headerLeft: Hodl,
            headerRight: () => <HeaderRightButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Coins"
          component={CoinsScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: WHITE,
            },
            headerTintColor: BLACK,
            headerLeft: () => <CoinsHeaderLeftButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: WHITE,
            },
            headerTintColor: BLACK,
            headerLeft: () => <SettingsHeaderLeftButton navigation={navigation} />,
            headerRight: () => <SettingsHeaderRightButton navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
