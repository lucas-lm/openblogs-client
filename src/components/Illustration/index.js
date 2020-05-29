import styled from 'styled-components'

const Illustration = styled.img.attrs((props) => ({
  alt: 'illustration',
}))`
  max-width: ${(props) => props.maxWidth};
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`
Illustration.defaultProps = {
  maxWidth: '800px',
}
export default Illustration
