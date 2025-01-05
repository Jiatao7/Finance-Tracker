
import {useState} from "react"
import { useUserContext } from "../context/UserContext"
import { useTransactionContext } from "../context/TransactionContext"

export default function TransactionForm () {
    const [error, setError] = useState(null)
    const user = useUserContext().user;
    const userDispatch = useUserContext().dispatch;
    const transactions = useTransactionContext().transactions;
    const transactionDispatch = useTransactionContext().dispatch;


    async function handleSubmit(formData) {
        const userId = user._id
        const description = formData.get('description')
        const type = formData.get('type')
        const amount = formData.get('amount')
        const category = formData.get('category')

        const newTransaction = {userId, description, type, amount, category}
        console.log(newTransaction)

        const response = await fetch('/api/transactions', {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(newTransaction)})
        const result = await response.json()

        if(!response.ok) {
            setError("Please fill in all fields")
        } else {
            setError(null)
            transactionDispatch({type: "ADD", payload: result})
        }
        
    }
    

    return (
        <form className="bg-white rounded-lg py-6 mb-10 max-w-lg space-y-4" action={handleSubmit} >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Add a New Transaction</h3>

            <label htmlFor="description" className="block text-sm font-medium text-gray-700" >
            Transaction Description
            </label>
            <input id="description" type="text" name="description" placeholder="Enter description" autoComplete="on" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />

            <label htmlFor="type" className="block text-sm font-medium text-gray-700"> Type </label>
            <select id="type" name="type" className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" >
                <option value="" className="text-sm">Select Type</option>
                <option value="Income" className="text-sm">Income</option>
                <option value="Expense" className="text-sm">Expense</option>
            </select>

            <label htmlFor="amount" className="block text-sm font-medium text-gray-700"> Amount </label>
            <input className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" id="amount" type="number" name="amount" placeholder="Enter amount" autoComplete="on" />

            <label htmlFor="category"className="block text-sm font-medium text-gray-700">Category</label>
            <select id="category" name="category" className="px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
                <option value="" className="text-sm">Select Category</option>
                <option value="Housing" className="text-sm">Housing</option>
                <option value="Transportation" className="text-sm">Transportation</option>
                <option value="Food" className="text-sm">Food</option>
                <option value="Healthcare" className="text-sm">Healthcare</option>
                <option value="Entertainment" className="text-sm">Entertainment</option>
                <option value="Education" className="text-sm">Education</option>
                <option value="Miscellaneous" className="text-sm">Miscellaneous</option>
            </select>

            <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                Add Transaction
            </button>

            {error && (
                <div className="text-red-600 text-sm mt-2">
                {error}
                </div>
            )}
        </form>

    )
}
