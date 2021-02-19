import styled from 'styled-components'

const RecommendWrapper = styled.div`
  position: absolute;
  top: 5.2rem;
  left: 0;
  padding: 2rem;
  border-radius: .8rem;
  width: 24rem;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.text.light};
  box-shadow: 0 0 .8rem rgba(0, 0, 0, .16);
`

const RecommendTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const RecommendSwitch = styled.span`
  font-size: 1.3rem;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.text.dark};
  }
`

const RecommendList = styled.div`
  margin-top: 1.6rem;
  margin-bottom: -.8rem;
`

const RecommendItem = styled.a`
  display: inline-block;
  margin-right: .8rem;
  margin-bottom: 1.2rem;
  padding: .4rem .6rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: .4rem;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.text.light};
`

export {
  RecommendWrapper,
  RecommendTitle,
  RecommendSwitch,
  RecommendList,
  RecommendItem
}
