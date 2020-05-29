import React, { Children, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import MenuButton from './MenuButton'
import Header from './Header'
import Nav from './Nav'
import Logo from '../Logo'

const Navbar = (props) => {
  const { links, children } = props
  const [open, setOpen] = useState(false)
  return (
    <Header>
      <Logo />
      <Nav open={open}>
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <NavLink exact to={link.to} activeStyle={{ color: 'black' }}>
                {link.label}
              </NavLink>
            </li>
          ))}
          {children instanceof Function
            ? children()
            : Children.map(children, (child) => <li>{child}</li>)}
        </ul>
      </Nav>
      <MenuButton onClick={() => setOpen(!open)}>
        {open ? <FaWindowClose color="#ff0000" /> : <FaBars />}
      </MenuButton>
    </Header>
  )
}

export default Navbar
