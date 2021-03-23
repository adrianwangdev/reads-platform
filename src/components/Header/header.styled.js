import styled from 'styled-components'

/* Images */
import LogoImage from 'assets/images/Logo.png'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6.4rem;
  box-shadow: 0 .2rem .8rem rgba(0, 0, 0, .08);
  z-index: 1;

  @media (max-width: ${({theme}) => theme.device.tablet}) {
    height: 5.6rem;
  }
`

const Logo = styled.div`
  display: inline-block;
  width: 12rem;
  height: 6.4rem;
  background: url(${LogoImage}) no-repeat center;
  background-size: contain;
  cursor: pointer;
  
  @media (max-width: ${({theme}) => theme.device.tablet}) {
    width: 10rem;
    height: 5.6rem;
  }
  
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    width: 8rem;
  }
`

export {
  HeaderWrapper,
  Logo
}
