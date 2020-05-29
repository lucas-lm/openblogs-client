import styled from 'styled-components'

export default styled.input`
  font-weight: 400;
  font-size: large;
  border-radius: ${(props) => props.theme.spacing(1)};
  background-color: #ffffffaa;
  border: none;

  &:disabled {
    background-color: transparent;
  }
`
