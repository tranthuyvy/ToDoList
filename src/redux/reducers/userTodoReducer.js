import {
  FETCH_USER_TODOS_REQUEST,
  FETCH_USER_TODOS_SUCCESS,
  FETCH_USER_TODOS_FAILURE,
} from '../types';

const initialState = {
  userTodos: [],
  loading: false,
  error: null,
};

const userTodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USER_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        userTodos: action.payload,
        error: null,
      };
    case FETCH_USER_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userTodosReducer;
