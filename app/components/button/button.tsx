import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
} from 'react-native';

import Styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends TouchableOpacityProps {
  text?: string;
  icontext?: string;
  customStyle?: any;
}

class Button extends Component<Props, {}> {
  render() {
    const {text, icontext, customStyle} = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        style={[Styles.buttonStyle, customStyle]}>
        {icontext && (
          <Icon name={icontext} color="#FFFFFF" style={Styles.iconStyle} />
        )}
        <Text style={Styles.buttonTextStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
