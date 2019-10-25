import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {Provider} from 'react-redux';

import AppContainer from 'app/navigation/appNavigation';
import configureStore from 'app/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

export default class App extends Component {
  render() {
    const {store, persistor} = configureStore();
    return (
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      </SafeAreaView>
    );
  }
}
