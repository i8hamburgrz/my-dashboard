import { RECEIVE_WEATHER } from '../actions/weather';

function weatherReducer(state = {}, action) {
  switch(action.type) {
    case RECEIVE_WEATHER:
      return {
        ...state,
        ...state.weather
      }
    default: 
      return state;
  }

}

export default weatherReducer;