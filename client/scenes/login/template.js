import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'
import { withStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'

import bgImg from 'images/bg1.jpg'
import whiteLogo from 'images/logoWhite.png'

injectGlobal`
  body {
    background-size: cover;
    background-position: top center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg});
  }
`

const styles = theme => ({
  page: {
    height: '100%',
    maxWidth: '80%',
    margin: '0 auto',
    padding: '25px 0'
  },
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  paper: {
    backgroundColor: 'transparent',
    width: '250px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnRow: {
    width: '100%;',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: '15px'
  },
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start'
  },
  header: {
    width: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'start',
    alignItems: 'center'
  }
})

const Login = (props) => {
  const { classes, onSubmit } = props

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div style={{ marginRight: '15px' }}>
            <img alt='Logo' height='38' src={whiteLogo} />
          </div>
          <Typography variant='display1' color={'primary'}>
            Office Playlistify
          </Typography>
        </div>
        <div className={classes.paper}>
          <div className={classes.btnRow}>
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
        </div>
        <div className={classes.footer}>
          <div className={classes.footerLeft}>
            <Typography variant='body2' color={'secondary'} style={{ marginRight: '15px' }}>
              <a href=''>About</a>
            </Typography>
            <Typography variant='body2' color={'secondary'}>
              <a href=''>Help</a>
            </Typography>
          </div>
          <div>
            <Typography variant='body2' color={'secondary'}>
              <a href='http://www.schnogz.com' target='_blank'>Andrew Schneider</a>
              {'  '}&copy; {1900 + new Date().getYear()}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Login)

