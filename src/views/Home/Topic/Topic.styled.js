import styled from 'styled-components'

const TopicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.4rem;
  padding-bottom: 2rem;
`

const TopicItem = styled.div`
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: .8rem;
  margin-right: 1.6rem;
  margin-bottom: 1.2rem;
  padding: .8rem 1rem;
  background: ${props => props.theme.colors.basic.light};
  cursor: pointer;
`

export {
  TopicWrapper,
  TopicItem
}
