import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}

export function push(name: string, params?: object | undefined) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params))
  }
}

export function pop(count?: number | undefined) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count))
  }
}

export function navigateAndReset(routes = [], index = 0) {
  navigationRef.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  )
}

export function navigateAndSimpleReset(name: string, index = 0) {
  navigationRef.dispatch(
    CommonActions.reset({
      index,
      routes: [{ name }],
    }),
  )
}
