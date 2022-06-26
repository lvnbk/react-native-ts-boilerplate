import { Roots } from '@/constants'
import baseStyle from '@/themes/base-style'
import { RootStackParamList } from '@/types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'

interface StateToProps {
  abcd: string
}

type Props = NativeStackScreenProps<RootStackParamList, Roots.Home> &
  StateToProps

export function HomePage() {
  const { t } = useTranslation()

  return (
    <View style={[baseStyle.center, baseStyle.flex]}>
      <Text>{t('actions.continue')}</Text>
    </View>
  )
}
