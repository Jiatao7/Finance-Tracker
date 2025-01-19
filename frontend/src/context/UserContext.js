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
            return( {user: {...state.user, balance: action.payload}} )       //payload is new balance
        default:
            return state
        case "LOGIN":
            return {user: action.payload}  //payload is data
        case "LOGOUT":
            return {user: null, token: null}
    }
}

//Create provider for context
export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, {user: null, token: null})
    
    useEffect(() => {    
        //Set user data
        const username = localStorage.getItem('username')
        if(username) {
            const fetchUser = async() => {
                const result = await fetch(`/api/users/username/${username}`)
                const data = await result.json()
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