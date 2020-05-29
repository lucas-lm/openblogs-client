import styled from 'styled-components'

const Center = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
  align-items: center;
`

Center.defaultProps = {
  direction: 'column',
}

export default Center
