import React, {Component} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';

import {user} from 'app/assets';
import Styles from './styles';

class SideBar extends Component<NavigationInjectedProps> {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView style={Styles.container}>
        <View style={Styles.profileContainer}>
          <View style={Styles.row}>
            <View style={Styles.dp}>
              <Image style={Styles.dpImage} source={user} />
            </View>
            <View style={Styles.avatharDetials}>
              <Text style={Styles.avatharName}>John Doe</Text>
              <Text style={Styles.companyName}>DreamsBig</Text>
            </View>
          </View>
        </View>
        <View style={Styles.logoutContainer}>
          <TouchableOpacity
            style={Styles.logoutItems}
            onPress={() => navigation.navigate('Login')}>
            <Text style={Styles.logoutItemsText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default withNavigation(SideBar);
