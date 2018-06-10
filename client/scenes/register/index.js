import React from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'

import Register from './template.js'
import { actions } from 'data'

class RegisterContainer extends React.Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()
    const { guid, password, code } = this.props
    this.props.authActions.login(guid, password, code)
  }

  render () {
    return <Register />
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  authActions: bindActionCreators(actions.auth, dispatch)
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(RegisterContainer)
