import request from '../request';

const KEY = '4168d77345c04e03bf101857201902';

export const ADD_WEATHER = 'ADD_WEATHER';

function addWeather(weather) {
  return {
    type: ADD_WEATHER,
    weather
  }
}

export const getAllWeather = () => {
  return (dispatch) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=90068`;
  
		return request(url)
      .then((weather) =>  {
        //TODO: maybe separate location and current weather? 
        dispatch(addWeather(weather))
      })
      .catch(err => {
        console.log(err);
      });
  };
}
