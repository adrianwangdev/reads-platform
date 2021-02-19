import React from 'react'
import { connect } from 'react-redux'
import { actions } from './store'

/* Images */
import { ReactComponent as PenLogo } from 'assets/images/icons/pen.svg'
import { ReactComponent as SearchLogo } from 'assets/images/icons/search.svg'

/* Styles */
import {
  NavbarWrapper,
  NavItem,
  SearchWrapper,
  NavSearch,
  Button
} from './Navbar.styled'

const Navbar = ({
  isFocused,
  handleNavSearchFocus,
  handleNavSearchBlur
}) => (
  <NavbarWrapper>
    <div>
      <NavItem active>首頁</NavItem>
      <NavItem>下載</NavItem>
      <SearchWrapper>
        <NavSearch
          onFocus={handleNavSearchFocus}
          onBlur={handleNavSearchBlur}
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

const mapStateToProps = state => {
  return {
    isFocused: state.navbar.searchIsFocused
  }
}

const mapDispatchToProps = {
  handleNavSearchFocus: actions.handleNavSearchFocus,
  handleNavSearchBlur: actions.handleNavSearchBlur
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
