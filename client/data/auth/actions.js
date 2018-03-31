import * as AT from './actionTypes'

export const login = (username) => ({ type: AT.LOGIN, username });
// export const register = (email, password) => ({ type: AT.REGISTER, payload: { email, password } });
// export const authenticate = () => ({ type: AT.AUTHENTICATE });
// export const logout = () => ({ type: AT.LOGOUT });