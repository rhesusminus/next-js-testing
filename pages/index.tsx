import React, { useState, FormEvent } from 'react'
import { useMutation } from 'react-query'
import { login } from '../lib/mutations'
import { Button } from 'components'

export default function Login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [mutate] = useMutation(login)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const response = await mutate({ username, password })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="bg-red-800 min-h-screen p-2 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white rounded p-8">
        <label className="block py-2">
          <span className="text-gray-700">Username</span>
          <input
            id="username"
            type="text"
            className="form-input mt-1 block w-full"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="block py-2">
          <span className="text-gray-700">Password</span>
          <input
            id="password"
            type="password"
            className="form-input mt-1 block w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Button className="my-2" type="submit">
          Log in
        </Button>
      </form>
    </div>
  )
}
