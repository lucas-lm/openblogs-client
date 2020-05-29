import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * {
    margin: ${(props) => props.theme.spacing(2)};
  }
`

export const Actions = styled.div`
  display: flex;
  > * {
    margin: ${(props) => props.theme.spacing(1)};
  }
`
