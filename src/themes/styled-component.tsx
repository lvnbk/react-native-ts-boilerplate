import styled from '@emotion/native'
import * as React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Colors from './colors'
import Metrics from './metrics'

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  keyboardAwareScrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingHorizontal: Metrics.large,
  },
})

const StyledView = styled.View(({ center }: { center: boolean }) => ({
  flex: 1,
  justifyContent: center ? 'center' : undefined,
  backgroundColor: Colors.white,
}))

const StyledSafeAreaView = styled.SafeAreaView(
  ({ center }: { center: boolean }) => ({
    flex: 1,
    justifyContent: center ? 'center' : undefined,
    backgroundColor: Colors.white,
  }),
)

const PageContainer = ({
  center,
  children,
  keyboardAware,
  style,
  safeAreaViewStyle,
  scrollContentStyle,
  enableOnAndroid,
  testID,
}: {
  children?: React.ReactElement | Array<React.ReactElement> | null
  center?: boolean
  keyboardAware?: boolean
  enableOnAndroid?: boolean
  style?: ViewStyle
  safeAreaViewStyle?: ViewStyle
  scrollContentStyle?: ViewStyle
  testID?: string | undefined
}): JSX.Element => (
  <StyledSafeAreaView center={center} style={safeAreaViewStyle}>
    {keyboardAware ? (
      <KeyboardAwareScrollView
        style={[styles.keyboardAwareScrollView, style]}
        contentContainerStyle={[
          styles.scrollViewContentContainer,
          scrollContentStyle,
        ]}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={enableOnAndroid}
        testID={testID}>
        {children}
      </KeyboardAwareScrollView>
    ) : (
      <View style={[styles.pageContainer, style]} testID={testID}>
        {children}
      </View>
    )}
  </StyledSafeAreaView>
)

PageContainer.defaultProps = {
  keyboardAware: false,
  center: false,
  enableOnAndroid: true,
  style: {},
  safeAreaViewStyle: {},
  scrollContentStyle: {},
}

export { StyledView, StyledSafeAreaView, PageContainer }
