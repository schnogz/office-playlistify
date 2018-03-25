import React from 'react'
import { NavLink } from 'react-router-dom'

import { Navbar, NavbarBrand } from 'components/Navbar'

const Wrapper = styled.div`
  width: 100%;
  height: ${props => props.height};
  margin: 0 auto;
  background-color: blue;
  @media(min-width: 768px) { width: ${props => props.fluid ? '720px' : '100%'}; }
  @media(min-width: 992px) { width: ${props => props.fluid ? '960px' : '100%'}; }
  @media(min-width: 1200px) { width: ${props => props.fluid ? '1140px' : '100%'}; }
`

const Header = () => {
  return (
    <Wrapper>
      <NavLink to='/'>
        <span>Company Name</span>
      </NavLink>
    </Wrapper>
  )
}

export default Header