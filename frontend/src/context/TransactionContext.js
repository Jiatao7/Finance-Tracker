import {createContext, useContext, useReducer, useEffect} from "react"
import { useUserContext } from "./UserContext"

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

    const {user} = useUserContext()

    useEffect(() => {
        if(user) {
            //Set transactions data
            const fetchTransactions = async() => {
                const result = await fetch(`/api/transactions/user/${user._id}`)
                const data = await result.json()
                dispatch({type: "SET", payload: data}) 
            }
            fetchTransactions()
        } else {
            dispatch({type: "SET", payload: null}) 
        }
    }, [user])

    console.log("TransactionContext: ", state)

    return (
        <TransactionContext.Provider value={{...state, transactionDispatch: dispatch}}>
            {children}
        </TransactionContext.Provider> 
    )
}