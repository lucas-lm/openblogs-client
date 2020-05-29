import React, { useState } from 'react'
import ActionInput from '../../../components/Inputs/ActionInput'
import { FaCopy, FaEye, FaEyeSlash } from 'react-icons/fa'

const MyToken = (props) => {
  const [visible, setVisible] = useState(false)
  const token = localStorage.getItem('accessToken')

  return (
    <section>
      <h3 style={{ fontWeight: 400, fontSize: 'x-large', lineHeight: 2 }}>
        Your current API Key:
      </h3>
      <ActionInput value={token} disabled type={visible ? 'text' : 'password'}>
        <button onClick={() => setVisible((v) => !v)}>
          {visible ? <FaEyeSlash /> : <FaEye />}
        </button>
        <button onClick={() => navigator.clipboard.writeText(token)}>
          <FaCopy />
        </button>
      </ActionInput>
    </section>
  )
}

export default MyToken
