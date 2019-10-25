import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import styles from './styles';
import {logoutUserService} from './store/saga';

import Button from 'app/components/button/button';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  fetchImageData: (page?: number, limit?: number) => void;
  fetchMoreImageData: (page?: number, limit?: number) => void;
  imageData: any;
  loading: boolean;
}

interface itemProp {
  items: any;
}

interface State {
  page: number;
  limit: number;
  isSearch: boolean;
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: 1,
      limit: 20,
      isSearch: false,
    };
  }

  componentDidMount() {
    const {fetchImageData} = this.props;
    const {page, limit} = this.state;
    fetchImageData(page, limit);
  }

  handleLogout = () => {
    const {navigation} = this.props;
    logoutUserService().then(() => {
      navigation.navigate('AuthStack');
    });
  };

  render() {
    const {navigation, imageData, fetchMoreImageData, loading} = this.props;
    const {page, limit, isSearch} = this.state;
    return (
      <View style={styles.container}>
        <Text>Home Page</Text>
        <Button text="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

export default Home;
