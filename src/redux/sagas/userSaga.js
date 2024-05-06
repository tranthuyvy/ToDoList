import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST } from '../types';

import { fetchUsersSuccess, fetchUsersFailure } from '../actions';

function* getAllUsersSaga() {
  try {

    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');

    yield put(fetchUsersSuccess(response.data));

  } catch (error) {

    yield put(fetchUsersFailure(error));
  }
}

export default function* usersSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, getAllUsersSaga);
}
