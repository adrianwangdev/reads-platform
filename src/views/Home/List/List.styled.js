import styled from 'styled-components'

const ListWrapper = styled.div`
  padding-bottom: 2.4rem;
  border-top: 1px solid ${props => props.theme.colors.border};  

  a {
    text-decoration: none;
  }
`

const ListItem = styled.div`
  padding: 2.4rem .8rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  transition: all .3s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.basic.light};
  }
`

const ListTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.dark};
`

const ListDescription = styled.p`
  margin: 1.6rem 0;
  font-size: 1.4rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text.light};
`

const ListDetail = styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text.light};
`

const CreateDate = styled.time`
  margin-right: 1.6rem;
`

const LikeAmount = styled.span`
  margin-right: 1.6rem;

  &::before {
    content: '👍';
    margin-right: .4rem;
  }
`

const CommentAmount = styled.span`

  &::before {
    content: '💬';
    margin-right: .4rem;
  }
`

const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4.8rem;
  margin-top: 2.4rem;
  border-radius: 2.4rem;
  color: ${props => props.theme.colors.text.dark};
  background: ${props => props.theme.colors.basic.light};
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.background.search};
  }
`

const RemindText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2.4rem;
  margin-top: 2.4rem;
  color: ${props => props.theme.colors.text.light};
`

export {
  ListWrapper,
  ListItem,
  ListTitle,
  ListDescription,
  ListDetail,
  CreateDate,
  LikeAmount,
  CommentAmount,
  MoreButton,
  RemindText
}
