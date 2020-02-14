import { RECEIVE_USER } from '../actions/user';

function userReducer(state = {}, action) {
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

export default userReducer;