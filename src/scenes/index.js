import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import Login from './login'
import Register from './register'
import Home from './home'
import LoginLayout from 'layouts/login'
import AuthorizedLayout from 'layouts/authorized'

class App extends React.Component {
  render () {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <LoginLayout path='/login' component={Login} />
            <LoginLayout path='/register' component={Register} />
            <AuthorizedLayout path='/home' component={Home} />
            <Redirect from='/' to='/login' />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App