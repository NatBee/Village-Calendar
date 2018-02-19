import { combineReducers } from 'redux';
import { calendarEventReducer } from './calendarEventReducer/calendarEventReducer';
import { logInReducer } from './logInReducer/logInReducer';
import { tokenReducer } from './tokenReducer/tokenReducer';
import { calendarIDReducer } from './calendarIDReducer/calendarIDReducer';
import { villageReducer } from './villageReducer/villageReducer';

export const rootReducer = combineReducers({
  events: calendarEventReducer,
  user: logInReducer,
  token: tokenReducer,
  calendarID: calendarIDReducer,
  village: villageReducer
})