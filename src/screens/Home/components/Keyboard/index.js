import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler, Text, View } from 'react-native';
import { View as Motion } from 'react-native-animatable';

import deleteImg from '../../../../../assets/images/icon-delete.png';
import { ButtonIcon, Touchable } from '../../../../components';
import { THEME } from '../../../../constants';
import styles from './styles';

const { MOTION } = THEME;
const Button = ({
  caption, icon, value, onPress,
}) => (
  <Touchable onPress={() => onPress(value)} underlayColor="rgba(0,0,0,0.1)">
    <View style={[styles.centered, styles.button]}>
      {icon ? (
        <ButtonIcon icon={icon} onPress={() => onPress(value)} style={styles.icon} />
      ) : (
        <Text style={styles.caption}>{caption || value.toString()}</Text>
      )}
    </View>
  </Touchable>
);
Button.propTypes = {
  caption: PropTypes.string,
  icon: PropTypes.number,
  onPress: PropTypes.func,
  value: PropTypes.number,
};
Button.defaultProps = {
  caption: undefined,
  onPress() {},
  value: undefined,
  icon: undefined,
};
const NUMBERS = [7, 8, 9, 4, 5, 6, 1, 2, 3];

class Keyboard extends Component {
  state = {
    loaded: false,
  };

  componentWillReceiveProps({ visible }) {
    const { onClose } = this.props;

    if (visible) this.setState({ loaded: true });
    BackHandler[visible ? 'addEventListener' : 'removeEventListener']('hardwareBackPress', () => {
      onClose();
      return true;
    });
  }

  onNumber = (digit) => {
    const { decimal, onChange, value } = this.props;
    let nextValue = digit;

    nextValue = `${value !== '0' || decimal ? value : ''}${decimal ? '.' : ''}${digit}`;
    onChange({ value: nextValue, decimal: false });
  }

  onDelete = () => {
    const { decimal, onChange, value } = this.props;
    let nextValue = '0';

    if (value.length > 1) nextValue = decimal ? value : value.slice(0, -1);
    onChange({ value: nextValue, decimal: false });
  }

  onDecimal = () => {
    const { onChange, value } = this.props;

    onChange({ value, decimal: !value.includes('.') });
  }

  render() {
    const { visible } = this.props;
    const { loaded } = this.state;

    return (
      <Motion
        {...MOTION.DEFAULT}
        animation={visible ? 'bounceInUp' : 'bounceOutDown'}
        style={loaded ? styles.container : undefined}
      >
        {loaded && (
          <View style={[styles.centered, styles.content]}>
            {NUMBERS.map(num => (
              <Button key={num} value={num} onPress={this.onNumber} />
            ))}
            <Button caption="." onPress={this.onDecimal} />
            <Button value={0} onPress={this.onNumber} />
            <Button icon={deleteImg} onPress={this.onDelete} />
          </View>
        )}
      </Motion>
    );
  }
}
Keyboard.propTypes = {
  visible: PropTypes.bool,
  decimal: PropTypes.bool,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  value: PropTypes.string,
};
Keyboard.defaultProps = {
  visible: true,
  decimal: false,
  onChange() {},
  onClose() {},
  value: '0',
};

export default Keyboard;
