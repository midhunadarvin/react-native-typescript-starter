import React, {Component} from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import Home from 'app/pages/app-pages/home';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  fetchImageData: (page?: number, limit?: number) => void;
  fetchMoreImageData: (page?: number, limit?: number) => void;
  imageData: any;
  loading: boolean;
}

class HomeScreen extends Component<Props> {
  render() {
    return <Home {...this.props} />;
  }
}

export default HomeScreen;
