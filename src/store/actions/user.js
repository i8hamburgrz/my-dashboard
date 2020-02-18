export const RECEIVE_USER = 'ADD_USER';

export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user
  }
}
