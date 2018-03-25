import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'material-ui/Button';

import AppHeader from 'components/header'

const Fragment = React.Fragment;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width:100%
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
    <Fragment>
      <AppHeader auth={false}/>
      <Wrapper>
        <h1>Welcome</h1>
        <h3>Register or continue as guest</h3>
        <LinkContainer to='/register' style={{margin: '10px'}}>
          <Button variant="raised" color="secondary">Register</Button>
        </LinkContainer>
        <LinkContainer to='/home'>
          <Button variant="raised" color="secondary">Continue As Guest</Button>
        </LinkContainer>
        <Footer>
          <h5>Having Trouble?</h5>
        </Footer>
      </Wrapper>
    </Fragment>
  )
};

export default reduxForm({ form: 'login' })(Login)