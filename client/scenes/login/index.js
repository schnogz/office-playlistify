import React from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'material-ui/Button'
import { actions, selectors } from 'data'
import { formValueSelector } from 'redux-form'
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


class LoginContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: ''
    };

    this.onUsernameChange = this.onSubmit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUsernameChange (event) {
    this.setState({ username: event.target.value });
  }

  onSubmit (event) {
    this.props.authActions.login(this.state.username);
  }

  render () {
    return (
      <Fragment>
        <AppHeader auth={false}/>
        <Wrapper>
          <h1>Welcome</h1>
          <input type="text" onChange={this.onUsernameChange} value={this.state.username}/>
          <LinkContainer to='/home' style={{margin: '10px'}}>
            <Button variant="raised" color="primary" onClick={this.onSubmit}>Login</Button>
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
  }
}

const mapStateToProps = (state) => {
  return ({
    guid: formValueSelector('login')(state, 'guid'),
    password: formValueSelector('login')(state, 'password'),
    code: formValueSelector('login')(state, 'code')
  });
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(actions.auth, dispatch)
});

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(LoginContainer)