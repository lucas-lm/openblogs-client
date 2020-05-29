import * as Yup from 'yup'

export const initialValues = { email: '', password: '' }

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is mandatory!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is mandatory!'),
})
