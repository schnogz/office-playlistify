import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Login from './login'
import Register from './register'
import Home from './home'
import { LoginLayout, AuthorizedLayout } from 'layouts'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#84bd00'
    },
    secondary: {
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#ffffff'
    }
  }
})

class App extends React.Component {
  render () {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CssBaseline>
            <MuiThemeProvider theme={theme}>
              <Switch>
                <LoginLayout component={Login} path='/login' />
                <LoginLayout component={Register} path='/register' />
                <AuthorizedLayout component={Home} path='/home' />
                <Redirect from='/' to='/login' />
              </Switch>
            </MuiThemeProvider>
          </CssBaseline>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
