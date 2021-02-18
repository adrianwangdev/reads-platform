import React, { useState } from 'react'

/* Images */
import { ReactComponent as PenLogo } from '../../../assets/images/icons/pen.svg'
import { ReactComponent as SearchLogo } from '../../../assets/images/icons/search.svg'

/* Styles */
import {
  NavbarWrapper,
  NavItem,
  SearchWrapper,
  NavSearch,
  Button
} from './Navbar.styled'

const Navbar = () => {

  const [isFocused, setIsFocused] = useState(false)
  console.log(isFocused)
  return (
    <NavbarWrapper>
      <div>
        <NavItem active>首頁</NavItem>
        <NavItem>下載</NavItem>
        <SearchWrapper>
          <NavSearch
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <SearchLogo
            className={isFocused ? 'focused' : ''}
          />
        </SearchWrapper>
      </div>
      <div>
        <NavItem colorLight>Aa</NavItem>
        <NavItem colorLight>登入</NavItem>
        <Button>註冊</Button>
        <Button CTA>
          <PenLogo />
          寫文章
        </Button>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
