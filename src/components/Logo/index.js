import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function (props) {
  return (
    <Link to="/">
      <img src={Logo} alt="openblogs logo" height={32} width={32} />
    </Link>
  )
}
