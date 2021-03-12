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
  Button
} from './Navbar.styled'

const Navbar = ({
  isFocused,
  isMouseEnter,
  userLogin,
  handleNavSearchFocus,
  handleNavSearchBlur,
  logout
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
          ? <NavItem to='/' onClick={logout} $colorLight>登出</NavItem>
          : <NavItem to='/login' $colorLight>登入</NavItem>
      }
      <Button>註冊</Button>
      <Button CTA>
        <PenIcon />
        寫文章
      </Button>
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
  logout: loginActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
