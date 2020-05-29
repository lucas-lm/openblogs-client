import React from 'react'
import Button from '../../components/Button'
import { useFormikContext } from 'formik'

const SubmitButton = (props) => {
  const { isSubmitting } = useFormikContext()
  return <Button disabled={isSubmitting} {...props} type="submit" />
}

export default SubmitButton
