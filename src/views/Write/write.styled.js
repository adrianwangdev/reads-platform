import styled from 'styled-components'
import { Container, Grid } from '@material-ui/core'

const WritePage = styled.div`
  padding: 2.4rem 0;
  background: ${({theme}) => theme.colors.background.detail};
  
  .ck-toolbar__items {
    height: 4.8rem;
  }
  .ck-toolbar_grouping {
    border: 1px solid ${({theme}) => theme.colors.border};
    border-top-left-radius: .8rem !important;
    border-top-right-radius: .8rem !important;
  }
  .ck-content {
    border: 1px solid ${({theme}) => theme.colors.border} !important;
    border-bottom-left-radius: .8rem !important;
    border-bottom-right-radius: .8rem !important;
    height: 40rem;

    p {
      letter-spacing: .04rem;
      line-height: 1.6;
    }

    img {
      margin: 2.4rem 0;
      width: 100%;
    }
  }
`

const WriteWrapper = styled(Container)`
  padding: 1.6rem 0;
`

const GridWhiteBackground = styled(Grid)`
  border-radius: .8rem;
  background: ${({theme}) => theme.colors.basic.white};
`

const ArticleTitleInput = styled.input.attrs({
  placeholder: '請輸入文章標題'
})`
  margin-bottom: 2.4rem;
  padding: 1.6rem 1.2rem;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: .8rem;
  width: 100%;
  font-size: 2.4rem;
  line-height: 1.8;
  color: ${({theme}) => theme.colors.text.dark};
  
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    padding: .8rem;
    font-size: 2rem;
  }
  
  &::placeholder {
    color: ${({theme}) => theme.colors.text.light};
  }
  
  &:focus {
    outline: none;
  }
`

const SubmitPostButton = styled.button`
  margin-top: 2.4rem;
  margin-bottom: .8rem;
  border: 1px solid ${({theme}) => theme.colors.primary.default};
  border-radius: .8rem;
  height: 4.8rem;
  width: 100%;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.primary.default};
  background: ${({theme}) => theme.colors.primary.hoverLight};
  transition: all .3s;
  cursor: pointer;

  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 1.8rem;
  }

  &:hover {
    color: ${({theme}) => theme.colors.basic.white};
    background: ${({theme}) => theme.colors.primary.hoverCTA};
  }
  
  &:focus {
    outline: 0;
  }
`


const SectionTitle = styled.h2`
  margin: 2.4rem 0;
  width: 100%;
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text.dark};
`


const PostList = styled.div`
  padding: 2.4rem 0;
  width: 100%;
  color: ${({theme}) => theme.colors.text.dark};
`

const PostItem = styled.div`
  padding: 2.4rem .8rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
`

const PostTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.4;
  
  @media (max-width: ${({theme}) => theme.device.mobile}) {
    font-size: 2rem;
  }
`

const PostContent = styled.div`
  margin: 1.6rem 0;
  
  p {
    padding: .8rem 0;
    font-size: 1.8rem;
    letter-spacing: .04rem;
    line-height: 1.6;

    @media (max-width: ${({theme}) => theme.device.mobile}) {
      padding: .6rem 0;
      font-size: 1.6rem;
    }
  }
  
  img {
    margin: 2.4rem 0;
    width: 100%;

    @media (max-width: ${({theme}) => theme.device.mobile}) {
      margin: 1.6rem 0;
    }
  }
`

const CreatedTime = styled.time`
  margin-right: 1.6rem;
  font-size: 1.4rem;
  color: ${({theme}) => theme.colors.text.light};
`

export {
  WritePage,
  WriteWrapper,
  GridWhiteBackground,
  ArticleTitleInput,
  SubmitPostButton,
  SectionTitle,
  PostList,
  PostItem,
  PostTitle,
  PostContent,
  CreatedTime
}
