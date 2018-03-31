import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
  const { onSubmit, onUsernameChange, username } = props;

  return (
    <Fragment>
      <AppHeader auth={false}/>
      <Wrapper>
        <h1>Welcome</h1>
        <input type="text" value={username}/>
        <LinkContainer to='/home' style={{margin: '10px'}}>
          <Button variant="raised" color="primary" onClick={onSubmit}>Login</Button>
        </LinkContainer>
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

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export default Login