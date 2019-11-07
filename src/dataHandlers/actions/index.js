import {all} from 'redux-saga/effects';
import UserList from './userActions/UserList';
import UpdateStore from './UpdateStore';

const rootSaga = function* rootSaga() {
  yield all([UserList(), UpdateStore()]);
};

export default rootSaga;
