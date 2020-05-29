import React from 'react'
import { Formik, Form } from 'formik'

const FormComponent = (props) => {
  const { children, className = null, ...rest } = props
  return (
    <Formik {...rest}>
      <Form className={className}>{children}</Form>
    </Formik>
  )
}

export default FormComponent
export { default as TextInput } from './TextInput'
export { default as SecretInput } from './SecretInput'
export { default as Submit } from './Submit'
