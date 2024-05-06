import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USER_TODOS_REQUEST } from '../types';
import {
  fetchUserTodosSuccess,
  fetchUserTodosFailure,
} from '../actions';

function* getUserTodosSaga(action) {

  const { userId } = action.payload;

  try {
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}/todos`);

    yield put(fetchUserTodosSuccess(response.data));

  } catch (error) {
    yield put(fetchUserTodosFailure(error.message));
  }
}

export default function* userTodosSaga() {
  yield takeLatest(FETCH_USER_TODOS_REQUEST, getUserTodosSaga);
}
