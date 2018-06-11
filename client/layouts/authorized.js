import React from 'react'
import { Route } from 'react-router-dom'

const AuthorizedLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}
      render={matchProps => (
        <Component style={{ height: '100%' }} {...matchProps} />
      )}
    />
  )
}

export default AuthorizedLayout
