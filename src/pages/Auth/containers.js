import styled from 'styled-components'

export const Main = styled.main`
  text-align: center;
  min-height: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }

  form {
    width: 80%;
    max-width: 500px;
    margin: 30px auto;
    padding: ${(props) => props.theme.spacing(3)};
    background-color: #fff;
    border-radius: ${(props) => props.theme.spacing(1)};
    align-self: flex-start;
    justify-self: center;

    h1 {
      line-height: 2;
      font-weight: 400;
    }

    button {
      width: 100%;
      padding: ${(props) => props.theme.spacing(2, 0)};
      margin: ${(props) => props.theme.spacing(2, 0)};
    }
  }
`
