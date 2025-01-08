export default function StatsCard({title, data, money}) {
    //money set to true will result in entries having a dollar sign before it

    let entryList = []
    
    let counter = 0
    const length = Object.keys(data).length

    for(const [key, value] of Object.entries(data)) {
        counter++
        entryList.push(
            <li className={`flex justify-between ${counter !== length ? "border-b pb-4" : ""}`}>
                <span className="font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                <span className="text-gray-900">{money ? (value >= 0 ? `$${value}` : `- $${-value}`) : value}</span>
            </li>
        )
    }
    
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 flex-grow mr-32">
            <h3 className="text-xl font-bold text-gray-800 mb-6">{title}</h3>
            <ul className="space-y-2">
                {entryList}
            </ul>
        </div>
    )
}