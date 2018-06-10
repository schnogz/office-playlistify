import { all, call, fork } from 'redux-saga/effects'

import auth from './auth/sagas'

const welcomeSaga = function * () {
  if (console) {
    console.log('root saga loaded')
  }
  yield
}

export default function * () {
  yield all([
    call(welcomeSaga),
    fork(auth)
  ])
}
