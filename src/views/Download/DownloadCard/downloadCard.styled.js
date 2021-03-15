import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-bottom: 2rem;
  border-radius: 1.2rem;
  width: 100%;
  height: ${props => props.mobileDevice ? '16rem' : '20rem'};
  background: ${props => props.theme.colors.basic.white};
  box-shadow: 0 .4rem 2.4rem rgba(0, 0, 0, .08);
  opacity: .84;
  transition: all .3s;
  cursor: pointer;
  
  &:hover {
    top: -1.6rem;
    box-shadow: 0 .4rem 4rem rgba(0, 0, 0, .12);
  }
`

const OsImage = styled.img`
  margin-bottom: .8rem;
  height: 50%;
`

const OsName = styled.p`
  padding: .6rem 0;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary.default};
`

export {
  CardWrapper,
  OsImage,
  OsName
}
