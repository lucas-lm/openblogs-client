import React, { useState } from 'react'
import { Root } from './containers'
import Field from './Field'
import Button from './Button'
import { FaEdit, FaSave } from 'react-icons/fa'

const EditableField = (props) => {
  const { initialValue } = props
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(initialValue)
  return (
    <Root>
      <Field
        contentEditable={editing}
        focus={editing}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!editing}
        onBlur={() => setEditing(false)}
      />
      <Button
        variant="icon"
        onClick={() => setEditing((editing) => (editing ? false : true))}
      >
        {editing ? <FaSave /> : <FaEdit />}
      </Button>
    </Root>
  )
}

export default EditableField
