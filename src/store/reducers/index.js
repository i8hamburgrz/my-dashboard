import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import weatherReducer from './weatherReducer';
import userReducer from './userReducer';


export default combineReducers({
  newsReducer,
  weatherReducer,
  userReducer
})