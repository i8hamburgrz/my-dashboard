import { ADD_NEWS } from '../actions/news';

function news(state = {}, action) {
  switch(action.type) {
    case ADD_NEWS:
      return {
        ...state,
        ...action.news,
      }
    default:
      return state;
  }
}

export default news;