import React from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import { formValueSelector } from 'redux-form'

import { actions } from 'data'
import Login from './template'

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()
    const { username } = this.props
    console.log(username)
    this.props.authActions.login(username)
  }

  render () {
    return (
      <Login onSubmit={this.onSubmit} />
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    username: formValueSelector('login')(state, 'username')
  })
}

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(actions.auth, dispatch)
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(LoginContainer)
