import i18n from '..'

export { default as en } from './en'
export { default as vi } from './vi'

export const translate = (key: string) => {
  return i18n.t(key)
}
