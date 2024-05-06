import { combineReducers } from 'redux';
import userReducer from './userReducer';
import userTodosReducer from './userTodoReducer';

const rootReducer = combineReducers({
  users: userReducer,
  userTodos: userTodosReducer,
});

export default rootReducer;