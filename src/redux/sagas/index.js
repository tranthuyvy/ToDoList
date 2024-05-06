import { all } from 'redux-saga/effects';
import usersSaga from './userSaga';
import userTodosSaga from './userTodoSaga'

export default function* rootSaga() {
  yield all([
    usersSaga(),
    userTodosSaga(),
  ]);
}
