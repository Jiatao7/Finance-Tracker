import SummaryCard from "../components/SummaryCard"
import Expenses from "../components/Expenses"

import { useUserContext } from '../context/UserContext'
import { useTransactionContext } from '../context/TransactionContext'

export default function Statistics() {
    const {user} = useUserContext();
    const {transactions} = useTransactionContext();

    return (
        <div className="mx-32 ">
            {(user && transactions) ?
                <>     
                    <SummaryCard/>
                    <Expenses/>
                </> 
            : null
            }
        </div>
    )
}