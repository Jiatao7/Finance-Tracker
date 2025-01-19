import { useUserContext } from '../context/UserContext'

export const useLogout = () => {
  const dispatch = useUserContext().userDispatch

  const logout = async (username, password) => {
    // remove the user from local storage
    localStorage.removeItem('username')
    localStorage.removeItem('token')

    // update the auth context
    dispatch({type: 'LOGOUT'})
  }

  return { logout }
}