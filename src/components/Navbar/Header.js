import styled from 'styled-components'

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2, 4)};
`
