import React from 'react'
import Avatar from '../../../components/Avatar'
import Button from '../../../components/Button'
import EditableField from '../../../components/EditableField'
import { Center } from '../../../components/GenericLayouts'
import Label from './Label'
import { FaFileImport } from 'react-icons/fa'

const PersonalProfile = () => {
  return (
    <Center as="section">
      <Label>
        <Avatar radius="128px" />
        <br />
        <Button as="p" variant="text">
          Change avatar <FaFileImport size={12} />
        </Button>

        <input type="file" accept="image/*" />
      </Label>
      <EditableField initialValue="Your Name" placeholder="Name" />
    </Center>
  )
}

export default PersonalProfile
