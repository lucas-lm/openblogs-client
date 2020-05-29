import styled from 'styled-components'
import Button from '../Button'

export default styled(Button)`
  border-radius: ${(props) => props.theme.spacing(0.5)};

  &:hover {
    background-color: #cccccc66;
  }
`
