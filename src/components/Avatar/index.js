import styled from 'styled-components'

const Avatar = styled.img`
  width: ${(props) => props.radius};
  height: ${(props) => props.radius};
  border-radius: 50%;
`

Avatar.defaultProps = {
  radius: '90px',
  src: 'https://api.adorable.io/avatars/285/abott@adorable.png',
}

export default Avatar
