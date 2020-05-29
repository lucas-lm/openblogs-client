import React from 'react'
import styled from 'styled-components'
import Page from '../Base'
import Illustration from '../../components/Illustration'
import notImplemented from '../../assets/501.svg'

const Container = styled.div`
  text-align: center;

  h1 {
    font-weight: 200;
    line-height: 1;
    margin: ${(props) => props.theme.spacing(4)};
  }
`

const NotImplemented = () => {
  return (
    <Page>
      <Container>
        <h1>This page is still a work in progress...</h1>
        <Illustration src={notImplemented} />
      </Container>
    </Page>
  )
}

export default NotImplemented
