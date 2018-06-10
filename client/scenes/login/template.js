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
    height: 100%;
    width: 100%;
  }
`

const styles = theme => ({
  container: {
    height: '100%'
  },
  paper: {
    height: '100%',
    padding: '25px'
  }
})

const Login = (props) => {
  const { classes, onSubmit } = props

  return (
    <Grid container className={classes.container} alignItems={'center'} direction={'row'} justify={'center'}>
      <Paper square={false} className={classes.paper} alignItems={'center'} direction={'row'} justify={'center'}>
        <LinkContainer to='/home'>
          <Button color='primary' onClick={onSubmit} variant='raised'>Login</Button>
        </LinkContainer>
        <LinkContainer to='/register'>
          <Button color='secondary' variant='raised'>Register</Button>
        </LinkContainer>
        <LinkContainer to='/home'>
          <Button color='secondary' variant='raised'>Continue As Guest</Button>
        </LinkContainer>
      </Paper>
    </Grid>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Login)

// export default reduxForm({ form: 'login' })(Login)
