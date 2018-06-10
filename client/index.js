import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'scenes'
import configureStore from 'store'

const { store, history } = configureStore()
const render = Component => {
  ReactDOM.render(
    <AppContainer key={Math.random()} warnings={false}>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept()
}
