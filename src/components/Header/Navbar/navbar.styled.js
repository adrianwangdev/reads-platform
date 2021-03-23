import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  height: 100%;
  color: ${({$colorLight, theme}) => $colorLight
    ? theme.colors.text.light
    : theme.colors.text.dark
  };
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background: ${({theme}) => theme.colors.basic.light};
  }
  
  &.active {
    color: ${({theme}) => theme.colors.primary.default};
  }
`

const SearchWrapper = styled.div`
  margin-left: 1.2rem;

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    margin-left: .2rem;
  }


  & > svg {
    position: absolute;
    top: 50%;
    right: .6rem;
    padding: .4rem;
    border-radius: 50%;
    transition: all .4s;
    transform: translateY(-50%);

    &.focused {
      background: ${({theme}) => theme.colors.basic.half};

      path {
        transition: all .4s;
        fill: ${({theme}) => theme.colors.basic.light};
      }
    }
  }
`

const NavSearch = styled.input.attrs({
  placeholder: '搜尋'
})`
  padding-left: 1.6rem;
  border: 0;
  border-radius: 2rem;
  width: 16rem;
  height: 4rem;
  color: ${({theme}) => theme.colors.text.dark};
  background: ${({theme}) => theme.colors.background.search};
  outline: none;
  transition: all .4s;
  
  &::placeholder {
    color: ${({theme}) => theme.colors.text.light};
  }

  &:focus {
    width: 22rem;
    
    @media (max-width: ${({theme}) => theme.device.mobile}) {
      width: 16rem;
    }
  }
`

const UserAccount = styled.span`
  margin-right: .8rem;
  color: ${({theme}) => theme.colors.text.dark};
`

const NavButton = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-left: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  border: 1px solid ${({theme}) => theme.colors.primary.default};
  border-radius: 2rem;
  height: 4rem;
  color: ${({theme}) => theme.colors.basic.white};
  text-decoration: none;
  background: ${({theme}) => theme.colors.primary.default};
  transition: all .2s;
  cursor: pointer;
  
  @media (max-width: ${({theme}) => theme.device.tablet}) {
    padding-right: .8rem;
  }

  &:hover {
    background: ${({theme}) => theme.colors.primary.hoverCTA};
  }

  &:last-child {
    margin-right: 1.6rem;
  }

  svg {
    margin-left: -.6rem;
    margin-right: .4rem;
  }
`

export {
  NavbarWrapper,
  NavItem,
  SearchWrapper,
  NavSearch,
  UserAccount,
  NavButton
}
