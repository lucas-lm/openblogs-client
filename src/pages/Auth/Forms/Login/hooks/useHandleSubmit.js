import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../../../contexts/AuthContext'
import api from '../../../../../services/api'

export default () => {
  const history = useHistory()
  const [, setAuth] = useAuth()

  return async (values, { setSubmitting }) => {
    let submitting = true
    try {
      const { status, data } = await api.post('/get_token', values)
      if (status === 200) {
        localStorage.setItem('accessToken', data.token)
        setAuth(true)
        history.push('/account')
      }
    } catch (error) {
      submitting = false
    } finally {
      if (!submitting) setSubmitting(false)
    }
  }
}
