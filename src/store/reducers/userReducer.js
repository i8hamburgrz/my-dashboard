import { RECEIVE_USER } from '../actions/user';

function user(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USER: {
      return {
        ...state,
        ...action.user
      }
    }
    default:
      return state;
  }
}

export default user;