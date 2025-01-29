import { useState } from 'react'
import { useUserContext } from '../context/UserContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const dispatch = useUserContext().userDispatch

  const login = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('username', json.user.username)
      localStorage.setItem('token', json.token)

      // update the auth context
      const data = {user: json.user, token: json.token}
      dispatch({type: "LOGIN", payload: data}) 

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}