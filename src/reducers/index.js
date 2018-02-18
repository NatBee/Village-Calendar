import { combineReducers } from 'redux';
import { calendarEventReducer } from './calendarEventReducer/calendarEventReducer';
import { logInReducer } from './logInReducer/logInReducer';
import { tokenReducer } from './tokenReducer/tokenReducer';

export const rootReducer = combineReducers({
  events: calendarEventReducer,
  user: logInReducer,
  token: tokenReducer
})