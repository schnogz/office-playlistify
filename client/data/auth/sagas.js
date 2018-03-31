import { takeLatest } from 'redux-saga/effects'
import { prop, assoc } from 'ramda'

import * as AT from './actionTypes'
import { api } from 'services/api'

export const login = function * (action) {
  debugger;
  yield console.log('login')
};

export const register = function * (action) {
  yield console.log('register')
};

export const logout = function * () {
  yield console.log('logout')
};

export default function * () {
  yield takeLatest(AT.LOGIN, login);
  yield takeLatest(AT.REGISTER, register);
  yield takeLatest(AT.LOGOUT, logout);
}