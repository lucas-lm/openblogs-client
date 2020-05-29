import styled from 'styled-components'

export default styled.button`
  position: absolute;
  top: ${(props) => props.theme.spacing(1)};
  right: ${(props) => props.theme.spacing(1)};
  visibility: collapse;

  @media (max-width: 768px) {
    z-index: 1000;
    visibility: visible;
  }
`
