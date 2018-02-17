import { combineReducers } from 'redux';
import { calendarEventReducer } from './calendarEventReducer/calendarEventReducer';
import { logInReducer } from './logInReducer/logInReducer';

export const rootReducer = combineReducers({
  events: calendarEventReducer,
  user: logInReducer
})