import {createContext, useState, useContext, useReducer, useEffect} from "react"

//Create Context
export const UserContext = createContext()

//Create use context function
export const useUserContext = () => { 
    const context = useContext(UserContext)
    if(!context) {
        throw Error('Error')
    }
    return context
}

//Create reducer
const UserReducer = (state, action) => {
    console.log(action.payload)

    switch(action.type) {
        case "LOGIN":
            return action.payload             //payload is data (user + token)
        case "LOGOUT":
            return {user: null, token: null}
        case "ACCOUNT_SETUP":
            return( {user: {...state.user, displayName: action.payload.displayName, balance: action.payload.balance, new: false}, token: state.token} )       //payload is object (with display name and balance)
        case "CHANGE_BALANCE":
            return( {user: {...state.user, balance: action.payload}, token: state.token} )       //payload is new balance
        default:
            return state
    }
}

//Create provider for context
export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, {user: null, token: null})
    const [loading, setLoading] = useState(true)

    useEffect(() => {    
        //Set user data
        const username = localStorage.getItem('username')
        const token = localStorage.getItem('token')
        if(username && token) {
            const fetchUser = async() => {
                const result = await fetch(`${process.env.REACT_APP_API_URL}/api/users/username/${username}`)
                const user = await result.json()
                const data = {user, token}
                dispatch({type: "LOGIN", payload: data}) 
                setLoading(false)
            }    
            fetchUser()
        } else {
            setLoading(false)
        }
    }, [])

    console.log("UserContext: ", state)

    return (
        <UserContext.Provider value={{...state, userDispatch: dispatch, loading}}>
            {children}
        </UserContext.Provider> 
    )
}