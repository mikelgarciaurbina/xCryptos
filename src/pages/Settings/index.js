import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { Image, Linking, Platform, Text, View } from 'react-native';

import PKG from '../../../package.json';
import addImg from '../../../assets/images/icon-add.png';
import backIosImg from '../../../assets/images/icon-back-ios.png';
import backImg from '../../../assets/images/icon-back.png';
import brandnameImg from '../../../assets/images/app-brandname.png';

import { C } from '../../constants';
import { ServiceCoins } from '../../services';
import { updatePrices } from '../../reducers/slides/favoritesSlice';
import { updateSettings } from '../../reducers/slides/settingsSlice';
import { ButtonIcon, Touchable } from '../../components';

import { FieldsetSwitch, ModalCurrency } from './components';
import styles from './styles';

const { version } = PKG;
const {
  CURRENCY: { USD },
  DONATION_URL,
  PRIVACY_URL,
} = C;
const JANUARY_15_2023_TIMESTAMP = 1705276544880;

export default function SettingsScreen({ navigation }) {
  const [modal, setModal] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const { currency = USD, nightMode = false } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const isInProduction = Date.now() > JANUARY_15_2023_TIMESTAMP;

  const onCurrency = (newCurrency) => {
    onModal();
    dispatch(updateSettings({ currency: newCurrency }));
    ServiceCoins.prices(favorites.map(({ coin }) => coin), newCurrency).then((prices) => {
      dispatch(updatePrices(prices));
    });
  };
  const onModal = () => {
    setModal(!modal);
  };
  const onNightMode = (nightMode) => {
    dispatch(updateSettings({ nightMode }));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );
  };
  const onPressDonate = () => {
    if (Linking.canOpenURL(DONATION_URL)) {
      Linking.openURL(DONATION_URL);
    }
  };
  const onPrivacy = () => {
    if (Linking.canOpenURL(PRIVACY_URL)) {
      Linking.openURL(PRIVACY_URL);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.centered, styles.content]}>
        <Image style={styles.brandname} source={brandnameImg} />
        <Text style={styles.text}>{`v${version}`}</Text>
      </View>
      <View style={styles.form}>
        <Touchable onPress={onModal}>
          <View style={styles.list}>
            <Text style={styles.label}>Local currency</Text>
            <Text style={styles.value}>{currency}</Text>
          </View>
        </Touchable>
        <FieldsetSwitch caption="Night Mode" label="Theme" onChange={onNightMode} value={nightMode} />
        {isInProduction && (
          <Touchable onPress={onPressDonate}>
            <View style={styles.list}>
              <Text style={styles.label}>Support us by donating</Text>
              <Text style={styles.value}>Buy me a coffee</Text>
            </View>
          </Touchable>
        )}
      </View>
      <View style={[styles.centered, styles.content]}>
        <Text style={styles.text}>❤️</Text>
        <Text style={styles.text}>
          Made by a small band of superheroes in Basque Country. Thank you for your support!
        </Text>
        <Touchable onPress={onPrivacy}>
          <Text style={[styles.text, styles.privacy]}>Privacy Policy</Text>
        </Touchable>
      </View>
      <ModalCurrency onClose={onModal} onValue={onCurrency} visible={modal} />
    </View>
  );
}

export function SettingsHeaderLeftButton({ navigation }) {
  return <ButtonIcon icon={Platform.OS === 'ios' ? backIosImg : backImg} onPress={() => navigation.goBack()} />;
}

export function SettingsHeaderRightButton({ navigation }) {
  return <ButtonIcon icon={addImg} onPress={() => navigation.navigate('Coins')} />;
}
