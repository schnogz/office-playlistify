import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import Home from './template.js'

class LoginContainer extends React.Component {
  render () {
    return <Home />
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(LoginContainer)
