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

export const login = createReducer(intialState, {
  [types.LOGIN_REQUEST](state: any) {
    return {
      ...state,
      loading: true,
      data: [],
    };
  },
  [types.LOGIN_REQUEST_SUCCESS](state: any, action: any) {
    return {
      ...state,
      loading: false,
      data: action.data,
    };
  },
  [types.LOGIN_REQUEST_FAILED](state: any) {
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
