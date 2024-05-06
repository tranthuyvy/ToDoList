import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_TODOS_REQUEST,
  FETCH_USER_TODOS_SUCCESS,
  FETCH_USER_TODOS_FAILURE,
} from './types'

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUserTodosRequest = (userId) => ({
  type: FETCH_USER_TODOS_REQUEST,
  payload: {
    userId: userId,
  },
});

export const fetchUserTodosSuccess = (todos) => ({
  type: FETCH_USER_TODOS_SUCCESS,
  payload: todos,
});

export const fetchUserTodosFailure = (error) => ({
  type: FETCH_USER_TODOS_FAILURE,
  payload: error,
});