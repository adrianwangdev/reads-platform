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
  color: ${props => props.colorLight
    ? props.theme.colors.text.light
    : props.theme.colors.text.dark
  };
  color: ${props =>
    props.active && props.theme.colors.primary.default
  };
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.basic.light};
  }
`

const SearchWrapper = styled.div`
  margin-left: 1.2rem;

  & > svg {
    position: absolute;
    top: 50%;
    right: .6rem;
    padding: .4rem;
    border-radius: 50%;
    transition: all .4s;
    transform: translateY(-50%);

    &.focused {
      background: ${props => props.theme.colors.basic.half};

      path {
        transition: all .4s;
        fill: ${props => props.theme.colors.basic.light};
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
  color: ${props => props.theme.colors.text.dark};
  background: ${props => props.theme.colors.background.search};
  outline: none;
  transition: all .4s;

  &::placeholder {
    color: ${props => props.theme.colors.text.light};
  }

  &:focus {
    width: 22rem;
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  border: 1px solid ${props => props.theme.colors.primary.default};
  border-radius: 2rem;
  height: 4rem;
  color: ${props => props.theme.colors.primary.default};
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background: ${props =>
      props.CTA
        ? props.theme.colors.primary.hoverCTA
        : props.theme.colors.primary.hoverLight
    };
  }

  &:last-child {
    margin-right: 1.6rem;
  }

  ${props => props.CTA && `
    color: ${props.theme.colors.basic.white};
    background: ${props.theme.colors.primary.default};
  `}

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
  Button
}
