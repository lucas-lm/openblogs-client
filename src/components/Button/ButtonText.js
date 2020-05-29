import styled from 'styled-components'
import ButtonBase from './ButtonBase'

const ButtonText = styled(ButtonBase)`
  padding: ${(props) => props.theme.spacing(1)};
  color: ${(props) => props.theme.color[props.color].regular};
  border-radius: ${(props) => props.theme.spacing(0.5)};

  &:hover {
    background-color: ${(props) =>
      props.theme.color[props.color].regular + '33'};
  }
`

ButtonText.defaultProps = {
  color: 'primary',
}

export default ButtonText
