import React from 'react'
import Page from '../Base'
import MyToken from './MyToken'
import PersonalProfile from './PersonalProfile'
import { Main, Actions } from './containers'
import Button from '../../components/Button'
import Note from '../../components/Note'

const Account = () => {
  return (
    <Page>
      <Main>
        <PersonalProfile />
        <MyToken />
        <Actions>
          <Button borderRadius="60px" variant="outlined">
            New API key
          </Button>
          <Button borderRadius="60px" color="secondary" variant="outlined">
            Change password
          </Button>
        </Actions>
        <Note>
          <p>
            <strong>Attention!</strong>
          </p>
          <p>We do not save any API key in our servers.</p>
          <p>Keeping your keys safe is your responsability.</p>
        </Note>
      </Main>
    </Page>
  )
}

export default Account
