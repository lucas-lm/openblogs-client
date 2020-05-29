import api from '../../../../../services/api'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  return async ({ email, password }, { setSubmitting }) => {
    let submitting = true
    try {
      const { status } = await api.post('/register', {
        email,
        password,
      })
      if (status === 201) history.push('/login')
    } catch (error) {
      console.error(error)
      submitting = false
    } finally {
      if (!submitting) setSubmitting(false)
    }
  }
}
