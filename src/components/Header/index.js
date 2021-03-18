import React from 'react'
import { Link } from 'react-router-dom'

/* Components */
import Navbar from './Navbar'

/* Styles */
import { HeaderWrapper, Logo } from './header.styled'

const Header = () => (
  <HeaderWrapper>
    <Link to='/'>
      <Logo />
    </Link>
    <Navbar />
  </HeaderWrapper>
)

export default Header
