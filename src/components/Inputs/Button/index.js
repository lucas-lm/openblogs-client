import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.color[props.color]};
  color: white;
  font-weight: 400;
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: ${(props) => props.theme.spacing(6)};
  box-shadow: #0000005e 0px 3px 6px;

  :hover {
    background-color: ${(props) => props.theme.color[`${props.color}Dark`]};
  }

  :active {
    background-color: ${(props) => props.theme.color[props.color]};
    box-shadow: #00000050 0px 3px 6px;
  }
`

Button.defaultProps = {
  color: 'primary',
}

export default Button

export const IconButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
