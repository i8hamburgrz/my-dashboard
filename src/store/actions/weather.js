export const ADD_WEATHER = 'ADD_WEATHER';

export function addWeather(weather) {
  return {
    type: ADD_WEATHER,
    weather
  }
}
