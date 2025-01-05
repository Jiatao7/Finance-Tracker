export default function TransactionCard({transaction}) {
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 mb-6 border-l-4 ${transaction.type === "Income" ? "border-green-600" : "border-red-600"}`}>
            <h3 className="font-semibold text-lg text-gray-800">{transaction.description}</h3>
            <p
                className={`${
                    transaction.type === "Income" ? "text-green-600" : "text-red-600"
                } font-semibold`}
            >
                {`${transaction.type === "Income" ? "+" : "-"} $${transaction.amount}`}
            </p>
            <p className="text-gray-500">Category: {transaction.category}</p>
            <p className="text-gray-400">Date: {new Date(transaction.date).toLocaleDateString()}</p>
        </div>
    )
}