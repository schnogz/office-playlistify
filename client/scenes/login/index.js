import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { formValueSelector } from 'redux-form'
import { actions } from 'data'
import AppHeader from 'components/header'
import Login from './template'

const Fragment = React.Fragment;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width:100%
`;

class LoginContainer extends React.Component {
  constructor (props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()
    const { username } = this.props
    console.log(username)
    this.props.authActions.login(username)
  }

  // onSubmit (username) {
  //   console.log(username)
  //   //const { username } = this.props
  //   //.props.authActions.login(username)
  // }

  render () {
    return (
      <Fragment>
        <AppHeader auth={false}/>
        <Wrapper>
          <Login onSubmit={this.onSubmit} />
        </Wrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    username: formValueSelector('login')(state, 'username'),
  });
};

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(actions.auth, dispatch)
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(LoginContainer)