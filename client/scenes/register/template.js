import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import AppHeader from 'components/header'

const Fragment = React.Fragment;

const Login = (props) => {
  const { submitting, invalid, ...rest } = props;
  const { onSubmit, authType } = rest;

  return (
    <Fragment>
      <AppHeader auth={false}/>
      <p>registration</p>
    </Fragment>

  )
};

export default reduxForm({ form: 'login' })(Login)