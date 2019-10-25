import {AsyncStorage} from 'react-native';
import {put, call, all} from 'redux-saga/effects';

import apiCall from 'app/api';
import * as HomeActions from 'app/actions/homeActions';

export function* fetchImageService(page?: number, limit?: number) {
  const apiArgs = {
    reqParams: {
      method: 'get',
      url: `https://picsum.photos/v2/list?page=${page}&limit=${limit}`,
    },
  };
  try {
    const response = yield call(apiCall, apiArgs);
    if (response.status === 200) {
      yield put(HomeActions.onUserDataSuccess(response.data));
    } else {
      yield put(HomeActions.onUserDataFailed());
    }
  } catch {
    yield put(HomeActions.onUserDataFailed());
  }
}

export function logoutUserService() {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem('userToken')
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
}
