import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width:100%
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
`

const Login = (props) => {
  const { onSubmit } = props

  return (
    <Wrapper>
      <h1>Welcome</h1>
      <h3>Enter Spotify username below</h3>
      <Field component='input'
          name='username'
          type='text'
      />
      <LinkContainer style={{margin: '10px'}}
          to='/home'
      >
        <Button color='primary'
          onClick={onSubmit}
          variant='raised'
        >Login</Button>
      </LinkContainer>
      <h3>Register or continue as guest</h3>
      <LinkContainer style={{margin: '10px'}}
          to='/register'
      >
        <Button color='secondary'
          variant='raised'
        >Register</Button>
      </LinkContainer>
      <LinkContainer to='/home'>
        <Button color='secondary'
          variant='raised'
        >Continue As Guest</Button>
      </LinkContainer>
      <Footer>
        <h5>Having Trouble?</h5>
      </Footer>
    </Wrapper>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default reduxForm({ form: 'login' })(Login)
