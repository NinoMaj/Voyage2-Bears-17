import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import userReducer from './userReducer';


export default combineReducers({
  user: userReducer,
  form,
});
