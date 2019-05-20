import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { View as Motion } from 'react-native-animatable';
import { connect } from 'react-redux';

import alertImg from '../../../../../assets/images/icon-alert.png';
import { Amount, ButtonIcon, Touchable } from '../../../../components';
import { THEME } from '../../../../constants';
import Chart from '../Chart';
import ModalHodl from '../ModalHodl';
import styles from './styles';

const { MOTION } = THEME;

class Info extends Component {
  state = {
    modal: false,
  };

  onModal = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  };

  render() {
    const {
      coin,
      navigation: { navigate },
    } = this.props;
    const { modal } = this.state;
    const {
      hodl = 0, name, price = 0, trend = 0,
    } = coin;
    const trendPercentage = parseInt((trend * 100) / price, 10);

    return (
      <Motion {...MOTION.DEFAULT} animation="bounceInUp" style={styles.container}>
        <View style={[styles.row, styles.header]}>
          <Touchable onPress={this.onModal} style={styles.coin}>
            <View style={styles.coin}>
              <View style={styles.row}>
                <Text style={[styles.text, styles.name]}>{name}</Text>
                {trendPercentage !== 0 && (
                  <View style={[styles.chip]}>
                    <Amount
                      style={[styles.text, styles.trend]}
                      symbol="%"
                      value={trendPercentage}
                    />
                  </View>
                )}
              </View>
              <Text style={[styles.text, styles.hodl]}>
                {hodl > 0 ? `${hodl} ${coin.coin}` : 'Tap for set your holdings'}
              </Text>
            </View>
          </Touchable>
          <ButtonIcon
            icon={alertImg}
            onPress={() => navigate('Alerts', { coin })}
            style={styles.button}
          />
        </View>
        <Chart coin={coin} />
        <ModalHodl coin={coin} onClose={this.onModal} visible={modal} />
      </Motion>
    );
  }
}

Info.propTypes = {
  coin: PropTypes.shape({}),
  navigation: PropTypes.shape({}).isRequired,
};

Info.defaultProps = {
  coin: undefined,
};

const mapStateToProps = ({ favorites }, { coin }) => ({
  coin: favorites.find(item => item.coin === coin),
});

export default connect(mapStateToProps)(Info);
