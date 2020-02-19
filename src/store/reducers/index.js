import { combineReducers } from 'redux';
import news from './newsReducer';
import weather from './weatherReducer';
import user from './userReducer';


export default combineReducers({
  news,
  weather,
  user
})