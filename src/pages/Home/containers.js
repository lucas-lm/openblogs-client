import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  min-height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`

export const Section = styled.section`
  padding: ${(props) => props.theme.spacing(2, 5)};

  h1 {
    font-size: 3em;
    font-weight: 400;
    line-height: 2;
  }

  p {
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.5;
  }
`
export const Buttons = styled.div`
  margin: ${(props) => props.theme.spacing(3, 0)};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${(props) => props.theme.spacing(2)};
  justify-content: start;
`
