interface StandardAction<P = unknown> {
  type: string
  payload: P
}

type ValueOf<T> = T[keyof T]

type Dispatch = (action: StandardAction) => void

type GeneratorType = Generator<unknown, void, unknown>

declare module '@emotion/native'

declare let window: {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: boolean
}
