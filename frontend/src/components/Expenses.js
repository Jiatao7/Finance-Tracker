import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

import ExpensesChart from "./ExpensesChart"

export default function Expenses() {
    const user = useUserContext().user;
    const userDispatch = useUserContext().dispatch;
    const transactions = useTransactionContext().transactions;
    const transactionDispatch = useTransactionContext().dispatch;

    const [categories, setCategories] = useState({
        housing: 0,
        transportation: 0,
        food: 0,
        healthcare: 0,
        entertainment: 0,
        education: 0,
        miscellaneous: 0,
    })

    useEffect(() => {
        const c = {
            housing: 0,
            transportation: 0,
            food: 0,
            healthcare: 0,
            entertainment: 0,
            education: 0,
            miscellaneous: 0,
        };

        transactions.forEach(t => {
            if(t.type === "Expense") {
                c[t.category.toLowerCase()] += t.amount
            }
        });
        

        setCategories(c)
    }, [transactions]) 
    

    return (
        <div className='flex justify-between items-center mx-32'>
            <div className="bg-white shadow-lg rounded-2xl p-6 flex-grow mr-40">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Categories of Expenses</h3>
                <ul className="space-y-2">
                    <li className="flex justify-between border-b pb-4">
                    <span className="font-medium text-gray-700">Housing:</span>
                    <span className="text-gray-900">${categories.housing}</span>
                    </li>
                    <li className="flex justify-between border-b pb-4">
                    <span className="font-medium text-gray-700">Transportation:</span>
                    <span className="text-gray-900">${categories.transportation}</span>
                    </li>
                    <li className="flex justify-between border-b pb-4">
                    <span className="font-medium text-gray-700">Food:</span>
                    <span className="text-gray-900">${categories.food}</span>
                    </li>
                    <li className="flex justify-between border-b pb-4">
                    <span className="font-medium text-gray-700">Healthcare:</span>
                    <span className="text-gray-900">${categories.healthcare}</span>
                    </li>
                    <li className="flex justify-between border-b pb-4">
                    <span className="font-medium text-gray-700">Entertainment:</span>
                    <span className="text-gray-900">${categories.entertainment}</span>
                    </li>
                    <li className="flex justify-between border-b pb-4">
                    <span className="font-medium text-gray-700">Education:</span>
                    <span className="text-gray-900">${categories.education}</span>
                    </li>
                    <li className="flex justify-between">
                    <span className="font-medium text-gray-700">Miscellaneous:</span>
                    <span className="text-gray-900">${categories.miscellaneous}</span>
                    </li>
                </ul>
            </div>

            <ExpensesChart categories={categories} label="Amount Spent"></ExpensesChart>
        </div>
    )
}