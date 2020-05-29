import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

// Pages
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Account from '../pages/Account'
import NotImplemented from '../pages/501'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        notAuthOnly
        exact
        path="/login"
        component={() => <Auth variant="login" />}
      />
      <Route
        notAuthOnly
        exact
        path="/register"
        component={() => <Auth variant="register" />}
      />
      <Route isPrivate exact path="/account" component={Account} />
      <Route exact path="/about" component={NotImplemented} />
      <Route exact path="/docs" component={NotImplemented} />
    </Switch>
  )
}
