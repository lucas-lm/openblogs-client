import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  notAuthOnly,
  ...rest
}) {
  const [signed] = useAuth()

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if (signed && notAuthOnly) {
    return <Redirect to="/" />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  notAuthOnly: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  notAuthOnly: false,
}
