import {createContext, useContext, useReducer} from "react"

//Create Context
export const TransactionContext = createContext()

//Create use context function
export const useTransactionContext = () => { 
    const context = useContext(TransactionContext)
    if(!context) {
        throw Error('Error')
    }
    return context
}

//Create reducer
const TransactionReducer = (state, action) => {
    switch(action.type) {
        case "SET":
            return {transactions: action.payload}   //payload is data
        case "ADD":
            return {transactions: [action.payload, ...state.transactions]}   //payload is new transaction
        default:
            return state
    }
}

//Create provider for context
export const TransactionContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, {
        transactions: []
    })

    return (
        <TransactionContext.Provider value={{...state, dispatch}}>
            {children}
        </TransactionContext.Provider> 
    )
}