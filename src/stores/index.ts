import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers'
import root from './sagas/root'

const sagaMiddleware = createSagaMiddleware()

const middleware = (
  getDefaultMiddleware: (arg0: { thunk: boolean }) => any,
) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

sagaMiddleware.run(root)

export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
