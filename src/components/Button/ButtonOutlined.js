import styled from 'styled-components'
import ButtonBase from './ButtonBase'

const ButtonOutlined = styled(ButtonBase)`
  padding: ${(props) => props.theme.spacing(1, 2)};
  color: ${(props) => props.theme.color[props.color].regular};
  border: solid 1px ${(props) => props.theme.color[props.color].regular};
`

ButtonOutlined.defaultProps = {
  color: 'primary',
}

export default ButtonOutlined
