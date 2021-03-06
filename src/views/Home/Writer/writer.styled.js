import styled from 'styled-components'

const WriterWrapper = styled.div`
  padding-top: 1.2rem;
  padding-bottom: 2.4rem;
`

const WriterTitle = styled.h3`
  margin-bottom: 1.6rem;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text.light};
`

const WriterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .8rem;
  padding-bottom: .8rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};

  &:last-child {
    margin-bottom: 0;
    border: 0;
  }
`

const WriterInfo = styled.div`
  display: flex;
`

const WriterName = styled.p`
  margin-right: 1.6rem;
  width: 6rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text.dark};
`

const ArticleAmount = styled.span`
  margin-right: .8rem;
  width: 6rem;
  font-size: 1.3rem;
  color: ${({theme}) => theme.colors.text.light};

  &::before {
    content: '📝';
    margin-right: .2rem;
    font-size: 1.2rem;
  }
`

const LikeAmount = styled.span`
  font-size: 1.3rem;
  color: ${({theme}) => theme.colors.text.light};
  
  &::before {
    content: '❤️';
    margin-right: .2rem;
    font-size: 1.2rem;
  }
`

const FollowButton = styled.div`
  padding: .4rem 0 .4rem .4rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.primary.default};
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.colors.primary.hoverCTA};
  }

  &::before {
    content: '+';
    margin-right: .2rem;
  }
`

export {
  WriterWrapper,
  WriterTitle,
  WriterItem,
  WriterInfo,
  WriterName,
  ArticleAmount,
  LikeAmount,
  FollowButton
}
