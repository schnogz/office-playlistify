import React from 'react'

import AppHeader from 'components/header'
const Fragment = React.Fragment

const Home = (props) => {
  return (
    <Fragment>
      <AppHeader auth/>
      <h1>Welcome Home!</h1>
      <p>Content goes here</p>
    </Fragment>
  )
}

export default Home
