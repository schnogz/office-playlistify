import * as AT from './actionTypes'

export const login = (username) => ({
  type: AT.LOGIN, payload: { username }
})
