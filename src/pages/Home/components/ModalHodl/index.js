import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

import { updateFavorite } from '../../../../reducers/slides/favoritesSlice';
import { Input, Modal } from '../../../../components';
import styles from './styles';

const ModalHodl = ({ coin, onClose, visible }) => {
  const dispatch = useDispatch();

  const onChange = (value) => {
    const realValue = Number.isNaN(parseFloat(value, 10)) ? 0 : value.replace(',', '.');
    dispatch(updateFavorite({ ...coin, hodl: realValue ? parseFloat(realValue, 10) : 0 }));
  };

  return (
    <Modal title={`${coin.coin} holdings`} onClose={onClose} visible={visible}>
      <Input
        autoFocus
        defaultValue={coin.hodl ? coin.hodl.toString() : undefined}
        onChangeText={onChange}
        style={[styles.listItem, styles.input]}
      />
    </Modal>
  );
};

export default ModalHodl;
