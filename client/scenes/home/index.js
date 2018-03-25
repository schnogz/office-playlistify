import React from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'

import Home from './template.js'

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <Home/>
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(LoginContainer)