/* eslint-disable camelcase */
import { Home } from './src/screens/Home'
import { Theme } from './src/components/Theme'
import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })
  if (!fontsLoaded) {
    return null
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Theme>
          <Home />
        </Theme>
      </PersistGate>
    </Provider>
  )
}
