import React from 'react'
import { connect } from 'react-redux'
import { actions } from './stores'
import { actions as loginActions } from '../../../views/Login/stores'

/* Components */
import SearchRecommend from './SearchRecommend/SearchRecommend'

/* Images */
import { ReactComponent as PenIcon } from 'assets/images/icons/pen.svg'
import { ReactComponent as SearchIcon } from 'assets/images/icons/search.svg'

/* Styles */
import {
  NavbarWrapper,
  NavItem,
  SearchWrapper,
  NavSearch,
  NavButton
} from './Navbar.styled'

const Navbar = ({
  isFocused,
  isMouseEnter,
  userLogin,
  handleNavSearchFocus,
  handleNavSearchBlur,
  userLogout
}) => {

  return (
  <NavbarWrapper>
    <div>
      <NavItem to='/' exact>首頁</NavItem>
      <NavItem to='/download'>下載</NavItem>
      <SearchWrapper>
        <NavSearch
          onFocus={handleNavSearchFocus}
          onBlur={handleNavSearchBlur}
        />
        <SearchIcon
          className={isFocused ? 'focused' : ''}
        />
        {isFocused || isMouseEnter ? (<SearchRecommend />) : null}
      </SearchWrapper>
    </div>
    <div>
      {
        userLogin
          ? <NavItem to='/' onClick={userLogout} $colorLight>登出</NavItem>
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
  userLogin: state.login.userLogin
})

const mapDispatchToProps = {
  handleNavSearchFocus: actions.handleNavSearchFocus,
  handleNavSearchBlur: actions.handleNavSearchBlur,
  userLogout: loginActions.userLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
