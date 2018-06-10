import fetch from 'cross-fetch'
import { put, select, takeLatest } from 'redux-saga/effects'
import { prop, assoc } from 'ramda'

import * as AT from './actionTypes'
import * as actions from '../actions.js'
import * as selectors from '../selectors.js'
import { api } from 'services/api'

export const login = function * (action) {
  yield console.log('login saga start')
  let username = yield select(selectors.auth.username)
  yield fetch(`/api/spotify/login`).then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(json =>
    window.location = json.authorizeURL
    // dispatch(receivePosts(subreddit, json))
  )
  yield put(actions.router.push('/home'))
  yield fetch(`/api/spotify/${username}/getPlaylists`).then(
    response => response.json(),
    // Do not use catch, because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895
    error => console.log('An error occurred.', error)
  )
    .then(json =>
      console.log(json)
    // dispatch(receivePosts(subreddit, json))
    )
  // yield put(actions.router.push('/home'))
  yield console.log('login saga end')
}

export const register = function * (action) {
  yield console.log('register')
}

export const logout = function * () {
  yield console.log('logout')
}

export default function * () {
  yield takeLatest(AT.LOGIN, login)
  yield takeLatest(AT.REGISTER, register)
  yield takeLatest(AT.LOGOUT, logout)
}
