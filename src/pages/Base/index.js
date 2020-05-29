import React from 'react'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import useLogout from './useLogout'
import { links } from './constants'
import { Root } from './containers'

const Base = ({ children }) => {
  const [isAuth, handleLogout] = useLogout()
  return (
    <Root>
      <Navbar
        links={links.filter((link) => (isAuth ? link.private : link.public))}
      >
        {isAuth && (
          <Button variant="text" onClick={handleLogout} color="danger">
            Logout
          </Button>
        )}
      </Navbar>
      {children}
    </Root>
  )
}

export default Base
