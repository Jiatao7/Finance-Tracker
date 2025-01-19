import { useUserContext } from '../context/UserContext'

export const useLogout = () => {
  const { dispatch } = useUserContext()

  const logout = async (username, password) => {
    // remove the user from local storage
    localStorage.removeItem('user')

    // update the auth context
    dispatch({type: 'LOGOUT'})
  }

  return { logout }
}