import { AnyAction } from '@reduxjs/toolkit'
import React from 'react'

// eslint-disable-next-line react-hooks/rules-of-hooks
export const dispatchRef = React.useRef<any>(null)

const ReduxDispatcher = (action: AnyAction) => {
  dispatchRef?.current?.(action)
}

export default ReduxDispatcher
