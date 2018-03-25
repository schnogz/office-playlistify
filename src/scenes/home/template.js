import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  background-color: pink
`;

const Home = (props) => {

  return (
    <Wrapper>
      <h1>Home</h1>
    </Wrapper>
  )
};

export default Home