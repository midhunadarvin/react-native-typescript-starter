import axios from 'axios';
import {put, call} from 'redux-saga/effects';

import * as LoginActions from 'app/actions/loginActions';

export default function* apiCall(payload: any) {
  const {reqParams} = payload;
  const apiResponse = yield call(axios, reqParams);

  // If user is unauthorized, navigate to login page.
  if (apiResponse.status === 401) {
    yield put(LoginActions.onRequestLogOut());
  }
  return apiResponse;
}
