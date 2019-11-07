// @flow
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './actions';

const sagaMiddleware = createSagaMiddleware();

const STORE = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default STORE;
