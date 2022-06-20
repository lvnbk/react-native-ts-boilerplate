import axios from 'axios'
import { Configs } from '@/configs/index'

const instance = axios.create({
  baseURL: Configs.BASE_URL_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

interface IError {
  message: string
  data: any
  status: number
}

export const handleError = ({ message, data, status }: IError) => {
  return Promise.reject({ message, data, status })
}

instance.interceptors.response.use(
  response => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  },
)

export default instance
