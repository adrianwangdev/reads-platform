import styled from 'styled-components'

/* Images */
import LogoImage from '../../assets/images/Logo.png'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  height: 6.4rem;
`

const Logo = styled.div`
  display: inline-block;
  width: 12rem;
  height: 6.4rem;
  background: url(${LogoImage}) no-repeat center;
  background-size: contain;
  cursor: pointer;
`

export {
  HeaderWrapper,
  Logo
}
