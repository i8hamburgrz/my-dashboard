import { ADD_WEATHER } from '../actions/weather';

function weatherReducer(state = {}, action) {
  switch(action.type) {
    case ADD_WEATHER:
      return {
        ...state,
        ...state.weather
      }
    default: 
      return state;
  }

}

export default weatherReducer;