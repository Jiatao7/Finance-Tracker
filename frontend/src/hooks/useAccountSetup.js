import { useState } from 'react'
import { useUserContext } from '../context/UserContext'

export const useAccountSetup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const user = useUserContext().user
  const dispatch = useUserContext().userDispatch

  const accountSetup = async (displayName, accountBalance) => {
    setIsLoading(true)
    setError(null)

    if(!displayName || !accountBalance) {
        setError("Please fill in all fields")
        setIsLoading(false)
        return;
    }

    const response = await fetch(`https://${process.env.REACT_APP_API_URL}/api/users/${user._id}`, {
        method: "PATCH", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({displayName, balance: accountBalance, new: false})
    })

    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // setup account
      dispatch({type: "ACCOUNT_SETUP", payload: {displayName, balance: accountBalance}}) 

      // update loading state
      setIsLoading(false)
    }
  }

  return { accountSetup, isLoading, error }
}