import styled from 'styled-components'
import { Container } from '@material-ui/core'

const HomeWrapper = styled(Container)`
  padding-top: 3.2rem;
`

const Banner = styled.div`
  margin-bottom: 2.4rem;

  img {
    width: 100%;
  }
`

const BackToTopButton = styled.div`
  position: fixed;
  right: 4rem;
  bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: .8rem;
  font-size: 1.4rem;
  color: ${({theme}) => theme.colors.text.dark};
  background: ${({theme}) => theme.colors.basic.light};
  cursor: pointer;
`

const LoginMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8%;
  left: 50%;
  border-radius: .8rem;
  width: 48rem;
  height: 5.6rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.basic.white};
  background: ${({theme}) => theme.colors.text.success};
  transform: translateX(-50%);
  animation: fadeOut 2s forwards;
  box-shadow: 0 .8rem 2.4rem rgba(0, 0, 0, .16);

  @keyframes fadeOut {
    0% {
      top: 0;
      opacity: 0;
    }
    25% {
      top: 8%;
      opacity: 1;
    }
    75% {
      top: 8%;
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export {
  HomeWrapper,
  Banner,
  BackToTopButton,
  LoginMessage
}
