import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

interface Action {
  type: string;
  payload: any;
}

interface State {
  data: any;
  loading: boolean;
}

const intialState = {
  data: [],
  loading: false,
};

export const userinfo = createReducer(intialState, {
  [types.HOME_LIST_REQUEST](state: any) {
    return {
      ...state,
      loading: true,
      data: [],
    };
  },
  [types.HOME_LIST_REQUEST_SUCCESS](state: any, action: any) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  },
  [types.HOME_LIST_REQUEST_FAILED](state: any) {
    return {
      ...state,
      loading: false,
    };
  },
  default: {
    return: {
      intialState,
    },
  },
});
