import styled from 'styled-components'

export const Root = styled.div`
  border: none;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0 6px;
`

export const Actions = styled.ul`
  display: inline-flex;
  li {
    margin: ${(props) => props.theme.spacing(1)};
    font-size: larger;
  }
`
