import React from 'react'
import { reduxForm } from 'redux-form'
import AppHeader from 'components/header'
import Button from '@material-ui/core/Button'

const Login = (props) => {
  return (
    <React.Fragment>
      <AppHeader auth={false} />
      <Button color='primary'
        variant='raised'
      >Authorize App</Button>
    </React.Fragment>
  )
}

export default reduxForm({ form: 'login' })(Login)
