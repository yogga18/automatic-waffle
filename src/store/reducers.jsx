import { combineReducers } from 'redux';
import usersReducers from './users/reducer';
import suratIjinReducers from './ijin/reducer';

export default combineReducers({
  usersReducers,
  suratIjinReducers,
});
