import styled from 'styled-components'

export default styled.input.attrs({ type: 'password' })`
  padding: ${(props) => props.theme.spacing(1)};
`
