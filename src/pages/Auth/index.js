import React from 'react'
import PropTypes from 'prop-types'
import Page from '../Base'
import { Main } from './containers'
import Illustration from '../../components/Illustration'
import { LoginForm, RegisterForm } from './Forms'
import Enter from '../../assets/enter.svg'
import Register from '../../assets/register.svg'

const illustrationProps = {
  login: {
    src: Enter,
    maxWidth: '600px',
  },
  register: {
    src: Register,
    maxWidth: '700px',
  },
}

const AuthenticationPage = ({ variant }) => {
  const isLoginPage = variant === 'login'
  return (
    <Page>
      <Main>
        <Illustration {...illustrationProps[variant]} />
        {isLoginPage ? <LoginForm /> : <RegisterForm />}
      </Main>
    </Page>
  )
}

AuthenticationPage.propTypes = {
  variant: PropTypes.oneOf(['login', 'register']).isRequired,
}

export default AuthenticationPage
