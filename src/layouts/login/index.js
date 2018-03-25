import React from 'react'
import { Route } from 'react-router-dom'

import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: grey;
  height: auto;
  min-height: 100%;
  width: 100%;

  @media(min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
`;

const LoginLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <Wrapper>
        <ContentContainer>
          <Component {...matchProps} />
        </ContentContainer>
      </Wrapper>
    )} />
  )
};

export default LoginLayout