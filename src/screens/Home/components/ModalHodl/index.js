import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateFavoriteAction } from '../../../../reducers/Favorites/actions';
import { Input, Modal } from '../../../../components';
import styles from './styles';

class ModalHodl extends Component {
  onChange = (value) => {
    const { coin, updateFavorite } = this.props;
    const realValue = Number.isNaN(parseFloat(value, 10)) ? 0 : value.replace(',', '.');
    updateFavorite({ ...coin, hodl: realValue ? parseFloat(realValue, 10) : 0 });
  }

  render() {
    const { coin: { coin, hodl = 0 }, onClose, visible } = this.props;

    return (
      <Modal title={`${coin} holdings`} onClose={onClose} visible={visible}>
        <Input
          autoFocus
          defaultValue={hodl !== 0 ? hodl.toString() : undefined}
          onChangeText={this.onChange}
          style={[styles.listItem, styles.input]}
        />
      </Modal>
    );
  }
}
ModalHodl.propTypes = {
  coin: PropTypes.shape({}),
  onClose: PropTypes.func,
  updateFavorite: PropTypes.func,
  visible: PropTypes.bool,
};
ModalHodl.defaultProps = {
  coin: undefined,
  onClose() {},
  updateFavorite() {},
  visible: false,
};

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
  updateFavorite: favorite => dispatch(updateFavoriteAction(favorite)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalHodl);
