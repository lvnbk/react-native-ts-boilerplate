import { Dimensions, Platform } from 'react-native'

import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper'
import { isTablet } from 'react-native-device-info'

const { width, height } = Dimensions.get('window')

export const tabletOrPhone = (tablet: number, phone: number): number =>
  isTablet() ? tablet : phone
export const isiPhoneX = (iPhoneX: number, regular: number): number =>
  isIphoneX() ? iPhoneX : regular

const SmallScreenWidth = 375 // iPhone 8 - 4.7 inches
const SmallScreenHeight = 667 // iPhone 8 - 4.7 inches
const isSmallScreen = (small: number, large: number): number => {
  if (height <= SmallScreenHeight) {
    return small
  }
  return large
}

const Metrics = {
  getStatusBarHeight,
  widthRatio: width / SmallScreenWidth,
  heighRatio: height / SmallScreenHeight,
  safeViewContainerHeight: height - getStatusBarHeight(true) - getBottomSpace(),
  screenWidth: width,
  screenHeight: height,
  statusBarHeight: (safe = false): number => getStatusBarHeight(safe),
  iPhoneXBottomSpaceHeight: getBottomSpace(),
  safeMarginTop: (regular: number, safe = false): number => {
    if (isIphoneX()) {
      // safe - whether you want for get safe area height or not
      // the height of the status bar: 44 for safe iPhoneX, 30 for unsafe iPhoneX,
      // 20 for other iOS devices and StatusBar.currentHeight for Android.
      return getStatusBarHeight(safe) + regular
    }
    return regular
  },
  safeMarginBottom: (regular: number): number => {
    if (isIphoneX()) {
      return getBottomSpace() + regular
    }
    return regular
  },
  isiPhone: Platform.OS === 'ios',
  osVersion: Platform.Version,
  footerHeight: isiPhoneX(90, 75),
  headerHeight: Platform.OS === 'android' ? 56 : getStatusBarHeight(true) + 44, // iOS includes the status bar height
  tabBarHeight: isiPhoneX(getBottomSpace() + 64, 64),
  isiPhoneX,
  isSmallScreen,
  // https://stackoverflow.com/questions/51858807/react-native-detect-screen-notch
  hasNotchOnAndroidScreen: getStatusBarHeight(true) > 24,

  // Margins/Padding
  xxxSmall: 4,
  xxSmall: 8,
  xSmall: 12,
  small: 16,
  medium: 20,
  large: 24,
  xLarge: 28,
  xxLarge: 32,
  xxxLarge: 40,
  xxxxLarge: 64,

  iconHeight: 24,
  smallIconHeight: 18,
  buttonHeight: 40,
  clearButtonHeight: 30,
  largeCard: 150,

  accordionViewHeight: 56,
  chipHeight: 38,

  borderRadiusXSmall: 2,
  borderRadiusSmall: 4,
  borderRadius: 6,
  borderRadiusMedium: 8,
  borderRadiusLarge: 10,
  borderRadiusRound: 100,
  borderWidth: 1,

  toastHeight: 47,

  inputHeight: 35,
  multilineInputHeight: 174,

  shadowOpacity: 0.2,

  poiCardHeight: 275,
}

export default Metrics
