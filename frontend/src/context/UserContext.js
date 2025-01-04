import {createContext, useContext, useReducer} from "react"


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
        case "set":
            console.log({user: action.payload})
            console.log(state)
            return {user: action.payload}   //payload is data
        default:
            return state
    }
}

//Create provider for context
export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(UserReducer, {user: null})

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider> 
    )
}