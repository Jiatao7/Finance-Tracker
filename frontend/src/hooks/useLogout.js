import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

export const useLogout = () => {
  const { userDispatch } = useUserContext()
  const { transactionDispatch } = useTransactionContext()

  const logout = async (username, password) => {
    // remove the user from local storage
    localStorage.removeItem('username')
    localStorage.removeItem('token')

    // update the auth context
    userDispatch({type: 'LOGOUT'})
    transactionDispatch({type: 'SET'}, {payload: []})
  }

  return { logout }
}