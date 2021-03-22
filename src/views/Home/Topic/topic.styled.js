import styled from 'styled-components'

const TopicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.4rem;
  padding-bottom: 2rem;
`

const TopicTitle = styled.h3`
  margin-bottom: 1.6rem;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({theme}) => theme.colors.text.light};
`

const TopicItem = styled.div`
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: .8rem;
  margin-right: 1.6rem;
  margin-bottom: 1.2rem;
  padding: .8rem 1rem;
  color: ${({theme}) => theme.colors.text.dark};
  background: ${({theme}) => theme.colors.basic.light};
  cursor: pointer;
`

export {
  TopicWrapper,
  TopicTitle,
  TopicItem
}
