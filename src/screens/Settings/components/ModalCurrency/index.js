import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Modal } from '../../../../components';
import { C } from '../../../../constants';
import Option from '../Option';

const { CURRENCY, SYMBOL } = C;

const ModalCurrency = ({ onClose, onValue, visible }) => (
  <Modal title="Choose your currency" visible={visible} onClose={onClose}>
    <View>
      {Object.values(CURRENCY).map(item => (
        <Option key={item} hint={item} caption={SYMBOL[item]} onPress={() => onValue(item)} />
      ))}
    </View>
  </Modal>
);
ModalCurrency.propTypes = {
  onClose: PropTypes.func,
  onValue: PropTypes.func,
  visible: PropTypes.bool,
};
ModalCurrency.defaultProps = {
  onClose() {},
  onValue() {},
  visible: false,
};

export default ModalCurrency;
