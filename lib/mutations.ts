import axios from 'axios'
import { UserCredentials } from '../pages/index'

const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : ''

const instance = axios.create({ baseURL })

export const login = (credentials: UserCredentials) => instance.post(`login`, { ...credentials })
