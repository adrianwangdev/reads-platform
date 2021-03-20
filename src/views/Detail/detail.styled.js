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

  &.mb16 {
    margin-bottom: 1.6rem;
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
  
  h3 {
    margin-top: 1.2rem;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2;
  }
  
  p {
    padding: .8rem 0;
    font-size: 1.8rem;
    letter-spacing: .04rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.text.dark};
  }
  
  img {
    margin: 2.4rem 0;
    width: 100%;
  }
`

const AuthorWrapper = styled.div`
  display: flex;
`

const AuthorAvatar = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  overflow: hidden;
  
  img {
   width: 100%;
  }
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.2rem;
`

const AuthorName = styled.p`
  margin-bottom: .8rem;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text.dark};
`

const AuthorDescription = styled.span`
  display: flex;
  
  p {
    margin-right: 2rem;
    font-size: 1.4rem;
    line-height: 1.4;
    color: ${props => props.theme.colors.text.light};
  }
  
  span {
   margin-left: .6rem;
  }
`

const AuthorFollowButton = styled.div`
  position: absolute;
  top: -.4rem;
  right: 0;
  padding: .4em;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary.default};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary.hoverCTA};
  }

  &::before {
    content: '+';
    margin-right: .2rem;
  }  
`

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text.dark};

  &::before {
    content: "";
    margin-right: .8rem;
    border-radius: .2rem;
    width: .4rem;
    height: 2rem;
    background: ${props => props.theme.colors.primary.default};
  }
`

const MoreArticleWrapper = styled.div`
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  line-height: 1.4;
  cursor: pointer;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: .4rem;
    border-bottom: 0;
  }
`

const MoreArticleTitle = styled.p`
  padding: .4rem 0;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.text.dark};
`

const MoreArticleLikeAmount = styled.p`
  padding: .4rem 0;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text.light};
`

export {
  DetailPage,
  DetailWrapper,
  GridWhiteBackground,
  ArticleInfo,
  InfoTitle,
  CreatedTime,
  InfoSubtitle,
  ArticleContent,
  AuthorWrapper,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorDescription,
  AuthorFollowButton,
  SectionTitle,
  MoreArticleWrapper,
  MoreArticleTitle,
  MoreArticleLikeAmount
}
