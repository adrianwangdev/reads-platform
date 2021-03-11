import styled from 'styled-components'
import { Container, Grid } from '@material-ui/core'

const DetailPage = styled.div`
  padding: 2.4rem 0;
  background: ${props => props.theme.colors.background.detail};
`

const DetailWrapper = styled(Container)`
  padding: 1.6rem 0;
`

const GridWhiteBackground = styled(Grid)`
  border-radius: .8rem;
  background: ${props => props.theme.colors.basic.white};

  &.mr16 {
    margin-right: 1.6rem;
    max-width: calc(66.666667% - 1.6rem);
  }
`

const InfoTitle = styled.h2`
  margin-bottom: .8rem;
  padding: .8rem 0;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.4;
`

const ArticleInfo = styled.div`
  padding: .2rem;
  font-size: 1.4rem;
  letter-spacing: .04rem;
  color: ${props => props.theme.colors.text.light};
`

const CreatedTime = styled.time`
  margin-right: 1.6rem;
`

const InfoSubtitle = styled.span`
  margin-right: 1.6rem;
  
  &:last-child {
    margin-right: 0;
  }
`

const ArticleContent = styled.div`
  margin-top: 3.2rem;
  
  p {
    padding: .8rem 0;
    font-size: 1.8rem;
    letter-spacing: .04rem;
    line-height: 1.6;
  }
  
  img {
    margin: 2.4rem 0;
    width: 100%;
  }
`

export {
  DetailPage,
  DetailWrapper,
  GridWhiteBackground,
  ArticleInfo,
  InfoTitle,
  CreatedTime,
  InfoSubtitle,
  ArticleContent
}
