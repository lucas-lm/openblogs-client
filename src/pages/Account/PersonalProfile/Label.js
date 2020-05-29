import styled from 'styled-components'

export default styled.label`
  cursor: pointer;
  color: blue;
  padding: ${(props) => props.theme.spacing(1)};

  input {
    display: none;
  }
`
