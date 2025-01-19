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
    switch(action.type) {
        case "SET":
            return {user: action.payload}   //payload is data
        case "CHANGE_BALANCE":
            console.log(state)
            return( {user: {...state.user, balance: action.payload}} )       //payload is new balance
        default:
            return state
        case "LOGIN":
            return {user: action.payload}  //payload is data
        case "LOGOUT":
            return {user: null}

    }
}

//Create provider for context
export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, {user: null})

    console.log("UserContext: ", state)
    
    useEffect(() => {    
        //Set user data
        const user = JSON.parse(localStorage.getItem('user'))

        if(user) {
            dispatch({type: "LOGIN", payload: user})
        }
        console.log(user)

    }, [])


    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider> 
    )
}