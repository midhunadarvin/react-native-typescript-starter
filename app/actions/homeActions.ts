import * as types from './types';

export function onUserDataInit() {
  return {
    type: types.HOME_LIST_REQUEST,
  };
}

export function onUserDataSuccess(data: any) {
  return {
    type: types.HOME_LIST_REQUEST_SUCCESS,
    data,
  };
}

export function onUserDataFailed() {
  return {
    type: types.HOME_LIST_REQUEST_FAILED,
  };
}
