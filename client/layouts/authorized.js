import React from 'react'
import { Route } from 'react-router-dom'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #ecebe8;
`

const ContentContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // height: 100%;
  // overflow-y: auto;
`

const AuthorizedLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}
      render={matchProps => (
        <Wrapper>
          <ContentContainer>
            <Component {...matchProps} />
          </ContentContainer>
        </Wrapper>
      )}
    />
  )
}

export default AuthorizedLayout
