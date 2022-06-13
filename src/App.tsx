import baseStyle from '@themes/base-style'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootNavigation } from './navigations'

export function AppNavigation() {
  return (
    <SafeAreaView style={[baseStyle.flex]}>
      <RootNavigation />
    </SafeAreaView>
  )
}
