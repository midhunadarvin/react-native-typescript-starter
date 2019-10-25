import * as types from './types';

/*
 * Action to initiate log out request
 */
export function onRequestLogOut() {
  return {
    type: types.LOGOUT_REQUEST_INIT,
  };
}
