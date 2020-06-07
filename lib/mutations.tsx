import axios from 'axios'

const instance = axios.create({ baseURL: 'localhost:3000/api' })

export const login = (credentials) => instance.post(`login`, { ...credentials })
