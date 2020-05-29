import styled from 'styled-components'
import ButtonBase from './ButtonBase'

const ButtonContained = styled(ButtonBase)`
  padding: ${(props) => props.theme.spacing(2, 3)};
  background-color: ${(props) => props.theme.color[props.color].dark};
  color: ${(props) => props.theme.color[props.color].contrast};
  box-shadow: #0000005e 0px 3px 6px;
`

ButtonContained.defaultProps = {
  color: 'primary',
}

export default ButtonContained
