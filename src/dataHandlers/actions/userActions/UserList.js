// @flow
import {put, takeLatest, call} from 'redux-saga/effects';
import type {Saga} from 'redux-saga';
import ApiCaller from 'src/dataHandlers/ApiCaller';
import * as ActionNames from 'src/common/metaData/ActionNames';

const apiData = () => {
  const HEADER = {
    'content-type': 'application/json',
  };
  return ApiCaller('5d889c8a3300002c0ed7da42', 'get', HEADER).then(
    response => response,
  );
};

export default function* makeCall(): Saga {
  yield takeLatest(ActionNames.USER_LIST, function* operateData(action) {
    yield put({type: ActionNames.USER_LIST_STARTED});
    try {
      const DATA = yield call(apiData.bind(this, action.payload));
      yield put({type: ActionNames.USER_LIST_SUCCESS, payload: DATA});
    } catch (error) {
      yield put({type: ActionNames.USER_LIST_FAILED});
    }
  });
}
