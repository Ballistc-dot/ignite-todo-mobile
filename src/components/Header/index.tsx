import { Image } from 'react-native'
import { Container } from './styles'
import logo from '../../../assets/logo.png'

export function Header() {
  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image source={logo} />
    </Container>
  )
}
