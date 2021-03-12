import styled from 'styled-components'
import { Container, Grid } from '@material-ui/core'

const LoginPage = styled.div`
  background: ${props => props.theme.colors.background.detail};
  padding: 24rem 0;
`

const LoginWrapper = styled(Container)`
  padding: 1.6rem 0;
`

const GridWhiteBackground = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.4rem 0;
  border-radius: .8rem;
  background: ${props => props.theme.colors.basic.white};
  box-shadow: 0 .4rem 2.4rem rgba(0, 0, 0, .08);
  
  &.mr16 {
    margin-right: 1.6rem;
    max-width: calc(66.666667% - 1.6rem);
  }
`

const Title = styled.h3`
  margin-bottom: 4rem;
  font-size: 3.2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary.default};
`

const Input = styled.input`
  margin-bottom: 1.6rem;
  padding: 1.2rem 1.6rem;
  border: 0;
  border-radius: .8rem;
  width: 24rem;
  letter-spacing: .04rem;
  color: ${props => props.theme.colors.text.dark};
  background: ${props => props.theme.colors.basic.light};
  
  &::placeholder {
    color: ${props => props.theme.colors.text.light};
  }
  
  &:focus {
    outline: none;
  }
`

const Link = styled.a.attrs({href: '/'})`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text.link};
  text-decoration: none;
  transition: all .2s;

  &:hover {
    color: ${props => props.theme.colors.text.hoverLink};
  }
`

const LoginButton = styled.button`
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;
  border: 0;
  border-radius: .8rem;
  width: 24rem;
  height: 4rem;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.basic.white};
  background: ${props => props.theme.colors.primary.default};
  transition: all .2s;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.colors.primary.hoverCTA};
  }
  
  &:focus {
    outline: none;
  }
`

const RemindText = styled.span`
  color: ${props => props.theme.colors.text.light};
`

export {
  LoginPage,
  LoginWrapper,
  GridWhiteBackground,
  Title,
  Input,
  Link,
  LoginButton,
  RemindText
}
