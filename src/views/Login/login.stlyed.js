import styled from 'styled-components'
import { Grid } from '@material-ui/core'

const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 6.4rem);
  background: ${props => props.theme.colors.background.detail};

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    height: calc(100% - 5.6rem);
  }
`

const GridWhiteBackground = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.4rem 0;
  border-radius: 2.4rem;
  background: ${props => props.theme.colors.basic.white};
  box-shadow: 0 .4rem 2.4rem rgba(0, 0, 0, .08);

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    padding: 5.6rem 0;
  }
  
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

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 2.8rem;
  }
`

const Input = styled.input`
  margin-bottom: .8rem;
  padding: 1.6rem;
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

const ErrorMessage = styled.span`
  display: block;
  margin-bottom: 1.2rem;
  padding-left: .2rem;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.text.danger};
  opacity: ${props => props.showMessage ? 1 : 0};
`

const RemindText = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text.light};
`

const LinkText = styled.span`
  color: ${props => props.theme.colors.text.link};
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.text.hoverLink};
  }
`

const ActionButton = styled.button`
  margin-top: .8rem;
  margin-bottom: 1.6rem;
  border: 0;
  border-radius: .8rem;
  width: 24rem;
  height: 4rem;
  font-size: 1.7rem;
  line-height: 1.6;
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

export {
  LoginPage,
  GridWhiteBackground,
  Title,
  Input,
  ErrorMessage,
  LinkText,
  ActionButton,
  RemindText
}
