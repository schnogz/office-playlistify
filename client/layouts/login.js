import React from 'react'
import { Route } from 'react-router-dom'

const LoginLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}
      render={matchProps => (
        <Component style={{ height: '100%' }} {...matchProps} />
      )}
    />
  )
}

export default LoginLayout
