/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { store } from '@stores/index'
import React from 'react'
import { Provider } from 'react-redux'
import { AppNavigation } from 'src/App'
import '@translations/index'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
