import React from 'react'

import AppHeader from 'components/header'

const Home = (props) => {
  return (
    <React.Fragment>
      <AppHeader auth />
      <h1>Welcome Home!</h1>
      <p>Content goes here</p>
    </React.Fragment>
  )
}

export default Home
