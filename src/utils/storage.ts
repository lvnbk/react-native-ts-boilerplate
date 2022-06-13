import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV({
  id: 'myapp',
  encryptionKey: 'my-app',
})

const saveLocalStorage = (key: string, value: any) => {
  if (!value) {
    return
  }

  storage.set(key, JSON.stringify(value))
}

const getLocalStorage = (key: string) => {
  const value = storage.getString(key)
  return !value ? value : JSON.parse(value)
}

const removeLocalStorage = (key: string) => {
  return storage.delete(key)
}

export { saveLocalStorage, getLocalStorage, removeLocalStorage }
