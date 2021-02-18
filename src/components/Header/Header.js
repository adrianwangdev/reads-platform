import React from 'react'

/* Components */
import Navbar from './Navbar/Navbar'

/* Styles */
import { HeaderWrapper, Logo } from './Header.styled'

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Navbar />
  </HeaderWrapper>
)

export default Header
