import styled from 'styled-components'

const Note = styled.blockquote`
  background: ${(props) => props.theme.color[props.variant].light};
  border-left: ${(props) => props.theme.spacing(1)} solid
    ${(props) => props.theme.color[props.variant].dark};
  color: ${(props) => props.theme.color[props.variant].contrast};
  padding: ${(props) => props.theme.spacing(3, 2)};
`

Note.defaultProps = {
  variant: 'warning',
}

export default Note
