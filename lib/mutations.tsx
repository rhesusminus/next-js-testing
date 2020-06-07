import axios from 'axios'

const instance = axios.create({ baseURL: 'https://my-first-app.rhesusminus.now.sh/api' })

export const login = (credentials) => instance.post(`login`, { ...credentials })
