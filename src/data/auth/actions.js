import * as AT from './actionTypes'

export const login = (guid, password, code, sharedKey) => ({ type: AT.LOGIN, payload: { guid, password, code, sharedKey } })
export const register = (email, password) => ({ type: AT.REGISTER, payload: { email, password } })
export const authenticate = () => ({ type: AT.AUTHENTICATE })
export const logout = () => ({ type: AT.LOGOUT })
export const startLogoutTimer = () => ({ type: AT.START_LOGOUT_TIMER })