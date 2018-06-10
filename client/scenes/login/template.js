import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { withStyles } from '@material-ui/core/styles'
import { Button, Paper, Grid } from '@material-ui/core'
import { Field, reduxForm } from 'redux-form'

import bgImg from 'images/login-bg.jpg'

injectGlobal`
  body {
    background-image: url(${bgImg});
    background-size: cover;
    background-position: top center;
  }
`

const styles = theme => ({
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: 'transparent',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})

const Login = (props) => {
  const { classes, onSubmit } = props

  return (
    <div className={classes.container}>
      <Paper square={false} className={classes.paper}>
        <div style={{ marginBottom: '15px' }}>
          <LinkContainer to='/home'>
            <Button color='primary' onClick={onSubmit} variant='raised'>Login</Button>
          </LinkContainer>
          <LinkContainer to='/register'>
            <Button color='secondary' variant='raised'>Register</Button>
          </LinkContainer>
        </div>
        <div>
          <LinkContainer to='/home'>
            <Button color='secondary' variant='raised'>Continue As Guest</Button>
          </LinkContainer>
        </div>
      </Paper>
    </div>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Login)

// export default reduxForm({ form: 'login' })(Login)
