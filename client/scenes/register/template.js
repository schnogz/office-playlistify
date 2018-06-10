import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import AppHeader from 'components/header'
import Button from 'material-ui/Button'

const Fragment = React.Fragment

const Login = (props) => {
  const { submitting, invalid, ...rest } = props
  const { onSubmit, authType } = rest

  return (
    <Fragment>
      <AppHeader auth={false}/>
      <Button variant="raised" color="primary">Authorize App</Button>
    </Fragment>

  )
}

export default reduxForm({ form: 'login' })(Login)
