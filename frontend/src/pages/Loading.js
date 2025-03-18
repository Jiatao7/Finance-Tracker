
export default function Loading() {
    return (
        <div className="flex items-center justify-center space-x-2 p-10">
            <div className="w-4 h-4 rounded-full animate-pulse bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-yellow-500"></div>
            <p className="ml-4 text-lg font-semibold text-gray-700">Loading...</p>
        </div>
    )
}