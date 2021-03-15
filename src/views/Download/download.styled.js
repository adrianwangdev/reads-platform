import styled from 'styled-components'
import { Container } from '@material-ui/core'

const DownloadPage = styled.div`
  background: linear-gradient(135deg, rgba(250, 207, 200, .8) 0%, rgba(247, 243, 213, .8) 100%);
  padding: 16rem 0;
`

const DownloadWrapper = styled(Container)`
  padding-bottom: 1.6rem;
`

const Title = styled.h3`
  margin-bottom: 7.2rem;
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 1.4;
  color: ${props => props.theme.colors.text.dark};
`

const DownloadListTitle = styled.h3`
  display: inline-flex;
  align-items: center;
  margin-bottom: 5.6rem;
  font-size: 3.6rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary.default};
  
  &::before {
    content: "⭳";
    margin-right: 1.6rem;
    font-size: 3.6rem;
  }
`

export {
  DownloadPage,
  DownloadWrapper,
  Title,
  DownloadListTitle
}
