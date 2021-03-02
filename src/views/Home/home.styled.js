import styled from 'styled-components'
import { Container } from '@material-ui/core'

const HomeWrapper = styled(Container)`
  padding-top: 3.2rem;
  border: 1px solid red;
`

const Banner = styled.div`
  margin-bottom: 2.4rem;

  img {
    width: 100%;
  }
`

export {
  HomeWrapper,
  Banner
}
