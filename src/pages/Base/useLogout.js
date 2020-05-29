import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default () => {
  const history = useHistory()
  const [isAuth, setAuth] = useAuth()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    setAuth(false)
    history.push('/')
  }

  return [isAuth, handleLogout]
}
