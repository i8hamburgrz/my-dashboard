import { RECEIVE_NEWS } from '../actions/news';

function newsReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_NEWS:
      return {
        ...state,
        ...action.news,
      }
    default:
      return state;
  }
}

export default newsReducer;