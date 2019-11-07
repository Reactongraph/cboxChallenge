// @flow
import {put, takeLatest} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';
import * as ActionNames from 'src/common/metaData/ActionNames';

export default function* makeCall(): Saga {
  yield takeLatest(ActionNames.UPDATE_STORE, function* operateData(action) {
    yield put({
      type: action.payload.Update_reducer,
      payload: {items: action.payload.filteredItems},
    });
  });
}
