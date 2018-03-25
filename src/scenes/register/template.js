import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'material-ui/Button';

const Wrapper = styled.div`
  width: 100%;
  padding: 35px;
  box-sizing: border-box;
  background-color: ${props => props.theme['white']};

  @media(min-width: 768px) { width: 550px; }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Login = (props) => {
  const { submitting, invalid, ...rest } = props
  const { onSubmit, authType } = rest

  return (
    <Wrapper>
      <Header>
        <h1>Register Below</h1>
      </Header>
      <Footer>
        <h5>Already Registered?
          <LinkContainer to='/login'>
            <span>Login Here</span>
          </LinkContainer>
        </h5>
      </Footer>
    </Wrapper>
  )
}

export default reduxForm({ form: 'login' })(Login)