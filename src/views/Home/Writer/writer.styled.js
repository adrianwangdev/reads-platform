import styled from 'styled-components'

const WriterWrapper = styled.div`
  border: 1px solid #000;
`

const WriterTitle = styled.h3`
  margin-bottom: 1.6rem;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.light};
`

const WriterItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .8rem;
  padding-bottom: .8rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};

  &:last-child {
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
  color: ${props => props.theme.colors.text.dark};
`

const ArticleAmount = styled.span`
  margin-right: .8rem;
  width: 6rem;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.text.light};

  &::before {
    content: '📝';
    margin-right: .2rem;
    font-size: 1.2rem;
  }
`

const LikeAmount = styled.span`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.text.light};
  
  &::before {
    content: '❤️';
    margin-right: .2rem;
    font-size: 1.2rem;
  }
`

const FollowButton = styled.div`
  padding: .4rem;
  padding-right: 0;
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
