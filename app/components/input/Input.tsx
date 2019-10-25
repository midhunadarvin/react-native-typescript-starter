import React, {Component} from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {colors} from 'app/constants';
import Styles from './styles';

interface Props extends TextInputProps {
  error?: any;
}

class Input extends Component<Props, {}> {
  render() {
    const {error} = this.props;
    return (
      <TextInput
        {...this.props}
        style={[
          Styles.inputStyle,
          {borderBottomColor: error ? colors.accent : colors.borderColor},
        ]}
      />
    );
  }
}

export default Input;
