import * as AT from './actionTypes'
import { assoc } from 'ramda'

const INITIAL_STATE = {
  isAuthenticated: false,
  isGuest: false,
  username: ''
}

const auth = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  console.info(action)
  switch (type) {
    case AT.LOGIN: {
      const { username } = payload
      return assoc('isLoggingIn', username, state)
    }
    case AT.AUTHENTICATE: {
      return assoc('isAuthenticated', true, state)
    }
    case AT.SET_AUTH_TYPE: {
      const { authType } = payload
      return assoc('auth_type', authType, state)
    }
    default:
      return state
  }
}

export default auth
