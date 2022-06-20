/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { store } from '@/stores/index'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { AppNavigation } from 'src/App'
import '@/translations/index'
import { dispatchRef } from '@/utils/redux-dispatcher'

const App = () => {
  useEffect(() => {
    if (dispatchRef.current) {
      dispatchRef.current = store.dispatch
    }

    return () => {}
  }, [])

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}

export default App
