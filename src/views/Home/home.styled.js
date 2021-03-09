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
  color: ${props => props.theme.colors.text.dark};
  background: ${props => props.theme.colors.basic.light};
  cursor: pointer;
`

export {
  HomeWrapper,
  Banner,
  BackToTopButton
}
