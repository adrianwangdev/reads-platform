import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { actions } from './stores'
import { actions as loginActions } from 'views/Login/stores'

/* Components */
import SearchRecommend from './SearchRecommend'

/* Images */
import { ReactComponent as PenIcon } from 'assets/images/icons/pen.svg'
import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg'

/* Styles */
import {
  NavbarWrapper,
  NavItem,
  SearchWrapper,
  NavSearch,
  UserAccount,
  NavButton
} from './navbar.styled'

const Navbar = ({
  isFocused,
  isMouseEnter,
  user,
  userLogin,
  handleNavSearchFocus,
  handleNavSearchBlur,
  handleNavSearch,
  handleUserLogout
}) => {

  const navSearchRef = useRef()

  const checkKeyCode = event => {
    event.keyCode === 13 && handleNavSearch(navSearchRef.current)
  }

return (
  <NavbarWrapper>
    <div>
      <NavItem to='/' exact>首頁</NavItem>
      <NavItem to='/download'>下載</NavItem>
      <SearchWrapper>
        <NavSearch
          onFocus={handleNavSearchFocus}
          onBlur={handleNavSearchBlur}
          ref={navSearchRef}
          onKeyUp={checkKeyCode}
        />
        <SearchIcon
          className={isFocused ? 'focused' : ''}
        />
        {isFocused || isMouseEnter ? (<SearchRecommend />) : null}
      </SearchWrapper>
    </div>
    <div>
      { user ? <UserAccount>{user.email}</UserAccount> : null }
      {
        userLogin
          ? <NavItem to='/' onClick={handleUserLogout} $colorLight>登出</NavItem>
          : <NavItem to='/login' $colorLight>登入</NavItem>
      }
      <NavButton to='/write'>
        <PenIcon />寫文章
      </NavButton>
    </div>
  </NavbarWrapper>
)}

const mapStateToProps = state => ({
  isFocused: state.navbar.searchIsFocused,
  isMouseEnter: state.recommend.isMouseEnter,
  user: state.login.user,
  userLogin: state.login.userLogin
})

const mapDispatchToProps = {
  handleNavSearchFocus: actions.handleNavSearchFocus,
  handleNavSearchBlur: actions.handleNavSearchBlur,
  handleNavSearch: actions.handleNavSearch,
  handleUserLogout: loginActions.handleUserLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
