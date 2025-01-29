import {createContext, useContext, useReducer, useEffect} from "react"

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
        case "CHANGE_BALANCE":
            console.log(state)
            return( {user: {...state.user, balance: action.payload}, token: state.token} )       //payload is new balance
        case "LOGIN":
            return action.payload             //payload is data (user + token)
        case "LOGOUT":
            return {user: null, token: null}
        default:
            return state
    }
}

//Create provider for context
export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, {user: null, token: null})
    
    useEffect(() => {    
        //Set user data
        const username = localStorage.getItem('username')
        const token = localStorage.getItem('token')
        if(username && token) {
            const fetchUser = async() => {
                const result = await fetch(`/api/users/username/${username}`)
                const user = await result.json()
                const data = {user, token}
                dispatch({type: "LOGIN", payload: data}) 
            }    
            fetchUser()
        }
    }, [])

    console.log("UserContext: ", state)

    return (
        <UserContext.Provider value={{...state, userDispatch: dispatch}}>
            {children}
        </UserContext.Provider> 
    )
}