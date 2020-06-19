import jwt from 'jsonwebtoken'
import { User } from '../pages/api/login'

const tokenExp = Math.floor(Date.now() / 1000) + 15 * 60

const hasura = {
  'x-hasura-allowed-roles': ['editor', 'user', 'mod'],
  'x-hasura-default-role': 'user'
  /*
  'x-hasura-user-id': '1234567890',
  'x-hasura-org-id': '123',
  'x-hasura-custom': 'custom-value'
  */
}

export const createJwtToken = (user: User) =>
  jwt.sign({ sub: user.id, name: user.username, exp: tokenExp, hasura }, process.env.ACCESS_TOKEN_SECRET)

export const createRefreshToken = (user: User) =>
  jwt.sign({ sub: user.id, name: user.username }, process.env.REFRESH_TOKEN_SECRET)

export const verifyToken = (token: string) => jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
