import { useState } from 'react'
import { useUserContext } from '../context/UserContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const dispatch = useUserContext().userDispatch

  const signup = async (username, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(`https://${process.env.REACT_APP_API_URL}/api/users/signup`, {
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

  return { signup, isLoading, error }
}