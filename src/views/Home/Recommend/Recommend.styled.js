import styled from 'styled-components'

const RecommendWrapper = styled.div`
  margin-bottom: 1.6rem;
`

const RecommendItem = styled.div`
  margin-bottom: .8rem;
  padding: 1.6rem;
  padding-left: 2.4rem;
  border-radius: .8rem;
  font-size: 1.8rem;
  font-weight: 700;
  ${props => {
    const { recommend } = props.theme.colors

    switch (props.category) {
      case 'daily':
        return (`
          color: ${recommend.dailyText};
          background: ${recommend.dailyBackground};
        `)
      case 'member':
        return (`
          color: ${recommend.memberText};
          background: ${recommend.memberBackground};
        `)
      case 'select':
        return (`
          color: ${recommend.selectText};
          background: ${recommend.selectBackground};
        `)
      case 'publication':
        return (`
          color: ${recommend.publicationText};
          background: ${recommend.publicationBackground};
        `)
      default:
        return (`
          color: ${recommend.dailyText};
          background: ${recommend.dailyBackground};
        `)
    }
  }}

  &:last-child {
    margin-bottom: 0;
  }

  > span::after {
    content: '▶';
    padding-left: 1.2rem;
  }
`

export {
  RecommendWrapper,
  RecommendItem
}
