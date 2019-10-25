import {takeEvery, all} from 'redux-saga/effects';

import * as types from 'app/actions/types';
import {fetchImageService} from 'app/pages/app-pages/home/store/saga';

const sagas = [takeEvery(types.HOME_LIST_REQUEST, fetchImageService)];

export default function* watch() {
  yield all(sagas);
}
