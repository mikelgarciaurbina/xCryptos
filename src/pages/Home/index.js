import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, BackHandler, FlatList, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import settingsIcon from '../../../assets/images/icon-settings.png';

import { C, THEME } from '../../constants';
import { ServiceCoins } from '../../services';
import { updatePrices } from '../../reducers/slides/favoritesSlice';
import { ButtonIcon } from '../../components';
import { Info, Keyboard, ListItem } from './components';
import styles from './styles';

const {
  DEFAULT: { FAVORITES, SETTINGS },
} = C;
const {
  COLOR: { BLACK },
  PRIMARY,
} = THEME;

export default function HomeScreen({ navigation }) {
  const [coin, setCoin] = useState(null);
  const [keyboard, setKeyboard] = useState(false);
  const [decimal, setDecimal] = useState(false);
  const [prefetch, setPrefetch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState(null);
  const favorites = useSelector((state) => state.favorites);
  const { currency, nightMode } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: nightMode ? BLACK : PRIMARY,
      },
    });
  }, [navigation, nightMode]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        fetch();
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [currency]);

  useEffect(() => {
    const handleBackPress = () => {
      const keepAlive = coin !== null;
      if (keepAlive) setCoin(null);
      return keepAlive;
    };

    if (coin) {
      const subscription = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return () => subscription.remove();
    }
  }, [coin]);

  const fetch = async () => {
    setRefreshing(true);
    const prices = await ServiceCoins.prices(
      favorites.map(({ coin }) => coin),
      currency
    );
    await dispatch(updatePrices(prices));
    setRefreshing(false);
  };

  const onFocusItem = (item) => (newValue) => {
    setCoin(item);
    setKeyboard(true);
    setValue(newValue);
  };

  const onPressItem = (item) => () => {
    setCoin(item);
    setKeyboard(false);
    setValue(null);
  };

  const onChangeValue = ({ value: newValue, decimal: newDecimal }) => {
    setValue(newValue);
    setDecimal(newDecimal);
  };

  const onCloseKeyboard = () => {
    setKeyboard(false);
    setValue(null);
  };

  return (
    <LinearGradient colors={nightMode ? THEME.GRADIENT_NIGHTMODE : THEME.GRADIENT} style={styles.screen}>
      <FlatList
        data={favorites}
        extraData={{ coin, keyboard, decimal, prefetch, refreshing, value }}
        keyExtractor={(item) => item.coin}
        refreshControl={
          <RefreshControl refreshing={refreshing && prefetch} onRefresh={fetch} tintColor={THEME.WHITE} />
        }
        renderItem={({ item }) => (
          <ListItem
            active={coin?.coin === item.coin}
            coin={item}
            decimal={decimal}
            conversion={coin?.price}
            onFocus={onFocusItem(item)}
            onPress={onPressItem(item)}
            value={value}
          />
        )}
        style={styles.list}
      />
      {coin?.coin && !keyboard && <Info coin={coin?.coin} />}
      {coin?.coin && (
        <Keyboard
          visible={keyboard}
          decimal={decimal}
          onChange={onChangeValue}
          onClose={onCloseKeyboard}
          value={value}
        />
      )}
    </LinearGradient>
  );
}

export function HeaderRightButton({ navigation }) {
  return <ButtonIcon icon={settingsIcon} onPress={() => navigation.navigate('Settings')} style={styles.icon} />;
}

export { Hodl } from './components';
