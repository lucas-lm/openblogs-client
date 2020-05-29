import React from 'react'
import Form, {
  TextInput,
  SecretInput,
  Submit,
} from '../../../../components/Form'
import useHandleSubmit from './hooks/useHandleSubmit'
import * as schema from './schema'

export default function () {
  const handleSubmit = useHandleSubmit()
  return (
    <Form {...schema} onSubmit={handleSubmit}>
      <h1>Sign in</h1>
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
        type="password"
        fullWidth
      />
      <Submit borderRadius="3px">Entrar</Submit>
    </Form>
  )
}
