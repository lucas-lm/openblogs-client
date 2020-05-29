import styled from 'styled-components'

const Button = styled.button`
  border-radius: ${(props) => props.borderRadius};
  font-weight: 600;
`

Button.defaultProps = {
  borderRadius: 0,
}

export default Button
