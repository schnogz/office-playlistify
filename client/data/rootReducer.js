import { combineReducers } from 'redux'
import { reducer as reduxUiReducer } from 'redux-ui'
import { reducer as formReducer } from 'redux-form'

import authReducer from './auth/reducers.js'

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  ui: reduxUiReducer
})

export default rootReducer
