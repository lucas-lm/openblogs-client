import React from 'react'
import Form, {
  TextInput,
  SecretInput,
  Submit,
} from '../../../../components/Form'
import * as schema from './schema'
import useHandleSubmit from './hooks/useHandleSubmit'

export default function () {
  const handleSubmit = useHandleSubmit()
  return (
    <Form {...schema} onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <TextInput
        name="email"
        label="Email"
        variant="outlined"
        margin="dense"
        size="small"
        fullWidth
      />
      <SecretInput
        name="password"
        label="Password"
        variant="outlined"
        margin="dense"
        size="small"
        fullWidth
      />
      <SecretInput
        name="confirmPassword"
        label="Confirm password"
        variant="outlined"
        margin="dense"
        size="small"
        fullWidth
      />
      <Submit borderRadius="3px">Register</Submit>
    </Form>
  )
}
