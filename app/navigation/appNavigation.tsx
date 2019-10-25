import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
import Home from 'app/screens/app-screens/home';
import Login from 'app/screens/auth-screens/login';
import AuthLoading from 'app/screens/auth-loading';
import SideBar from 'app/components/sidebar';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const MainStack = createStackNavigator(
  {
    Home: {screen: Home},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppStack = createDrawerNavigator(
  {
    MainStack: MainStack,
  },
  {
    drawerWidth: width - 50,
    drawerPosition: 'left',
    contentComponent: props => <SideBar {...props} />,
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      AuthStack: AuthStack,
      AppStack: AppStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
