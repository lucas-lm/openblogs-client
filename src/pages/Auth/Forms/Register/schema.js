import * as Yup from 'yup'

export const initialValues = { email: '', password: '', confirmPassword: '' }

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is mandatory!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is mandatory!'),
  confirmPassword: Yup.string()
    .required('You must confirm your password!')
    .oneOf(
      [Yup.ref('password'), null],
      'Password and confirmation does not match!'
    ),
})
