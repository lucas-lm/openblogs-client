import React from 'react'
import { HashRouter } from 'react-router-dom'
import GlobalTheme from './themes/global'
import AuthProvider from './contexts/AuthContext'
import Routes from './routes'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <GlobalTheme>
      <AuthProvider>
        <HashRouter>
          <GlobalStyle />
          <Routes />
        </HashRouter>
      </AuthProvider>
    </GlobalTheme>
  )
}

export default App
