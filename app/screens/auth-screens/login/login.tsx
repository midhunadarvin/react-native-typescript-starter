import React, {Component} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import Login from 'app/pages/auth-pages/login';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class LoginScreen extends Component<Props> {
  render() {
    return <Login {...this.props} />;
  }
}

export default LoginScreen;
