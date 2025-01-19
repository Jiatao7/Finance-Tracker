import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

import StatsCard from './StatsCard';
import ExpensesChart from "./ExpensesChart"

export default function Expenses() {
    const {transactions} = useTransactionContext();

    //Amount per category
    const [categories, setCategories] = useState({
        housing: 0,
        transportation: 0,
        food: 0,
        healthcare: 0,
        entertainment: 0,
        education: 0,
        miscellaneous: 0,
    })

    //Transactions per category
    const [categoriesCount, setCategoriesCount] = useState({
        housing: 0,
        transportation: 0,
        food: 0,
        healthcare: 0,
        entertainment: 0,
        education: 0,
        miscellaneous: 0,
    })

    useEffect(() => {
        //Amount per category
        const c = {
            housing: 0,
            transportation: 0,
            food: 0,
            healthcare: 0,
            entertainment: 0,
            education: 0,
            miscellaneous: 0,
        };

        //Transactions per category
        const cc =  {
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
                cc[t.category.toLowerCase()] ++
            }
        });
        
        setCategories(c)
        setCategoriesCount(cc)
    }, [transactions]) 
    

    return (
        <>
            <div className='flex justify-between items-center my-8'>
                <StatsCard title="Expense Categories by Amount Spent" data={categories} money={true} key={"Expense Categories by Amount Spent"}/>
                <ExpensesChart categories={categories} label="Amount Spent"></ExpensesChart>
            </div>
            <div className='flex justify-between items-center my-8'>
                <StatsCard title="Expense Categories by Transactions" data={categoriesCount} key={"Expense Categories by Transactions"}/>
                <ExpensesChart categories={categoriesCount} label="# of Transactions" money={false}></ExpensesChart>
            </div>
        </>
    )
}