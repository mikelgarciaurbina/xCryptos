import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, Platform, RefreshControl } from 'react-native';

import backIosImg from '../../../assets/images/icon-back-ios.png';
import backImg from '../../../assets/images/icon-back.png';

import {
  addFavoriteAction,
  removeFavoriteAction,
  updatePricesAction,
} from '../../reducers/Favorites/actions';
import { saveCoinsAction } from '../../reducers/Coins/actions';
import { ButtonIcon, Input } from '../../components';
import { THEME } from '../../constants';
import { ServiceCoins } from '../../services';
import { ListItem } from './components';
import styles from './styles';

class CoinsScreen extends Component {
  static navigationOptions({ navigation: { goBack, state } }) {
    const { onSearch } = state.params || {};

    return {
      title: 'Coins',
      headerLeft: (
        <ButtonIcon icon={Platform.OS === 'ios' ? backIosImg : backImg} onPress={() => goBack()} />
      ),
      headerTitle: (
        <Input
          autoFocus
          onChangeText={onSearch}
          placeholder="Search..."
          keyboardType="default"
          style={styles.input}
        />
      ),
      headerStyle: { backgroundColor: THEME.WHITE },
      headerTintColor: THEME.BLACK,
    };
  }

  state = {
    filteredCoins: undefined,
    refreshing: false,
  };

  async componentWillMount() {
    const { coins } = this.props;
    if (coins.length === 0) this.fetch();
  }

  componentDidMount() {
    const { navigation } = this.props;

    navigation.setParams({ onSearch: this.onSearch });
  }

  fetch = async () => {
    const { saveCoins } = this.props;

    this.setState({ refreshing: true });
    await ServiceCoins.list().then(saveCoins);
    this.setState({ refreshing: false });
  };

  onChangeItem = async ({ coin, favorite }) => {
    const {
      addFavorite,
      favorites,
      removeFavorite,
      settings: { currency },
      updatePrices,
    } = this.props;

    if (favorite) removeFavorite(coin);
    else {
      addFavorite(coin);
      const coins = [...favorites, coin].map(item => item.coin);
      ServiceCoins.prices(coins, currency).then(updatePrices);
    }
  };

  onSearch = (value) => {
    const { coins } = this.props;
    const search = value.toLowerCase();

    this.setState({
      filteredCoins: coins.filter(
        ({ name, coin }) => name.toLowerCase().indexOf(search) > -1 || coin.toLowerCase().indexOf(search) > -1,
      ),
    });
  };

  renderItem = ({ item }) => {
    const { favorites } = this.props;

    return (
      <ListItem
        coin={item}
        favorite={favorites.findIndex(({ coin }) => coin === item.coin) > -1}
        onChange={this.onChangeItem}
      />
    );
  };

  render() {
    const { coins, favorites } = this.props;
    const { filteredCoins, refreshing } = this.state;

    return (
      <FlatList
        data={filteredCoins || coins}
        keyExtractor={item => item.coin}
        extraData={favorites}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.fetch} />}
        renderItem={this.renderItem}
        style={styles.screen}
      />
    );
  }
}
CoinsScreen.propTypes = {
  addFavorite: PropTypes.func,
  coins: PropTypes.arrayOf(PropTypes.shape()),
  favorites: PropTypes.arrayOf(PropTypes.shape()),
  navigation: PropTypes.shape().isRequired,
  removeFavorite: PropTypes.func,
  saveCoins: PropTypes.func,
  settings: PropTypes.shape().isRequired,
  updatePrices: PropTypes.func,
};
CoinsScreen.defaultProps = {
  addFavorite() {},
  coins: [],
  favorites: [],
  removeFavorite() {},
  saveCoins() {},
  updatePrices() {},
};

const mapStateToProps = ({ coins, favorites, settings }) => ({
  coins,
  favorites,
  settings,
});

const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(addFavoriteAction(favorite)),
  removeFavorite: favorite => dispatch(removeFavoriteAction(favorite)),
  saveCoins: coins => coins && dispatch(saveCoinsAction(coins)),
  updatePrices: prices => prices && dispatch(updatePricesAction(prices)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoinsScreen);
