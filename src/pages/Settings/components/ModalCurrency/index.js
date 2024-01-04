import React from 'react';
import { View } from 'react-native';

import { Modal } from '../../../../components';
import { C } from '../../../../constants';
import Option from '../Option';

const { CURRENCY, SYMBOL } = C;

const ModalCurrency = ({ onClose, onValue, visible }) => (
  <Modal title="Choose your currency" visible={visible} onClose={onClose}>
    <View>
      {Object.values(CURRENCY).map((item) => (
        <Option key={item} hint={item} caption={SYMBOL[item]} onPress={() => onValue(item)} />
      ))}
    </View>
  </Modal>
);

export default ModalCurrency;
