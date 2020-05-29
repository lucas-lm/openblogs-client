import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../Base'
import { Main, Section, Buttons } from './containers'
import Illustration from '../../components/Illustration'
import Button from '../../components/Button'
import Blogging from '../../assets/blogging.svg'

const Home = () => {
  return (
    <Page>
      <Main>
        <Illustration src={Blogging} />
        <Section>
          <h1>openblogs</h1>
          <p>Very simple and nice REST API for writing articles.</p>
          <p>Free for write, read, publish, share.</p>
          <p>openblogs is for everyone</p>
          <Buttons>
            <Link to="/docs#get_started">
              <Button borderRadius="60px" color="primary">
                Get started
              </Button>
            </Link>
            <Link to="/about">
              <Button borderRadius="60px" color="secondary">
                Learn more
              </Button>
            </Link>
          </Buttons>
        </Section>
      </Main>
    </Page>
  )
}

export default Home
