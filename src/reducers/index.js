import { combineReducers } from 'redux';
import { calendarEventReducer } from './calendarEventReducer/calendarEventReducer';
import { logInReducer } from './logInReducer/logInReducer';
import { tokenReducer } from './tokenReducer/tokenReducer';
import { calendarIDReducer } from './calendarIDReducer/calendarIDReducer';

export const rootReducer = combineReducers({
  events: calendarEventReducer,
  user: logInReducer,
  token: tokenReducer,
  calendarID: calendarIDReducer
})