import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, Platform, RefreshControl } from 'react-native';

import backIosImg from '../../../assets/images/icon-back-ios.png';
import backImg from '../../../assets/images/icon-back.png';

import { ServiceCoins } from '../../services';
import { saveCoins } from '../../reducers/slides/coinsSlice';
import { addFavorite, removeFavorite, updatePrices } from '../../reducers/slides/favoritesSlice';
import { ButtonIcon, Input } from '../../components';

import { ListItem } from './components';
import styles from './styles';

export default function CoinsScreen({ navigation }) {
  const [filteredCoins, setFilteredCoins] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const coins = useSelector((state) => state.coins);
  const favorites = useSelector((state) => state.favorites);
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    const search = value.toLowerCase();

    setFilteredCoins(
      coins.filter(
        ({ name, coin }) => name.toLowerCase().indexOf(search) > -1 || coin.toLowerCase().indexOf(search) > -1
      )
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Input autoFocus onChangeText={onSearch} placeholder="Search..." keyboardType="default" style={styles.input} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (coins.length === 0) fetch();
  }, []);

  const fetch = async () => {
    setRefreshing(true);
    await ServiceCoins.list().then((coinList) => {
      dispatch(saveCoins(coinList));
    });
    setRefreshing(false);
  };

  const onChangeItem = async ({ coin, favorite }) => {
    if (favorite) {
      dispatch(removeFavorite(coin));
    } else {
      dispatch(addFavorite(coin));
      const favoriteCoins = [...favorites, coin].map((item) => item.coin);
      ServiceCoins.prices(favoriteCoins, settings.currency).then((prices) => {
        dispatch(updatePrices(prices));
      });
    }
  };

  renderItem = ({ item }) => {
    return (
      <ListItem
        coin={item}
        favorite={favorites.findIndex(({ coin }) => coin === item.coin) > -1}
        onChange={onChangeItem}
      />
    );
  };

  return (
    <FlatList
      data={filteredCoins || coins}
      keyExtractor={(item) => item.coin}
      extraData={favorites}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetch} />}
      renderItem={renderItem}
      style={styles.screen}
    />
  );
}

export function CoinsHeaderLeftButton({ navigation }) {
  return <ButtonIcon icon={Platform.OS === 'ios' ? backIosImg : backImg} onPress={() => navigation.goBack()} />;
}
