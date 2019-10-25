import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from 'app/reducers';
import sagas from 'app/sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['nav', 'loadingReducer'],
  debug: true, // to get useful logging
};

const persistedReducer = persistCombineReducers(persistConfig, rootReducers);

// Add saga middleware
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
if (__DEV__) {
  middleware.push(createLogger());
}
const middlewares = [applyMiddleware(...middleware)];

export default () => {
  const store = createStore(
    persistedReducer,
    undefined,
    compose(...middlewares),
  );
  sagaMiddleware.run(sagas);
  const persistor = persistStore(store);
  return {store, persistor};
};
