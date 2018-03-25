import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'material-ui/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width:100%
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
`;

const Login = (props) => {
  const { submitting, invalid, ...rest } = props;
  const { onSubmit, authType } = rest;

  return (
    <Wrapper>
      <Header>
        <h1>Welcome</h1>
      </Header>
      <h3>Sign in or register below</h3>
      <ButtonWrapper>
        <LinkContainer to='/register'>
          <Button variant="raised" color="primary">
            Register
          </Button>
        </LinkContainer>
        <Button variant="raised" color="primary">Login</Button>
      </ButtonWrapper>
      <LinkContainer to='/home'>
        <Button variant="raised" color="secondary">Continue As Guest</Button>
      </LinkContainer>
      <Footer>
        <h5>Having Trouble?</h5>
      </Footer>
    </Wrapper>
  )
};

export default reduxForm({ form: 'login' })(Login)