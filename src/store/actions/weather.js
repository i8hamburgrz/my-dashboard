export const RECEIVE_WEATHER = 'ADD_WEATHER';

export function receiveWeather(weather) {
  return {
    type: RECEIVE_WEATHER,
    weather
  }
}
