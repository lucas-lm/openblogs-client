import styled from 'styled-components'

export default styled.nav`
  ul {
    display: flex;
    min-width: 500px;
    justify-content: space-between;
    align-items: center;
  }

  a {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    background-color: whitesmoke;
    height: 100%;
    width: ${(props) => (props.open ? '200px' : 0)};
    overflow-x: hidden;
    transition: ease 300ms;
    z-index: 500;

    ul {
      margin-top: ${(props) => props.theme.spacing(4)};
      flex-direction: column;
      max-width: 100%;
      justify-content: space-between;
      padding-left: ${(props) => props.theme.spacing(3)};
      align-items: flex-start;

      li {
        margin: ${(props) => props.theme.spacing(1)};
      }
    }
  }
`
