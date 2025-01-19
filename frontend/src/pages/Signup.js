import { useSignup } from "../hooks/useSignup"

export default function Signup() {
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async(formData) => {
        const username = formData.get("username")
        const password = formData.get("password")

        await signup(username, password)
    }

    return (
        <form className="bg-white rounded-lg shadow-2xl p-6 mb-16 max-w-lg space-y-4 mx-auto" action={handleSubmit} >
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Sign Up</h3>

            <label htmlFor="username" className="block text-sm font-medium text-gray-700" >
                Username
            </label>
            <input id="username" type="text" name="username" placeholder="Enter username" autoComplete="on" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
        
            <label htmlFor="password" className="block text-sm font-medium text-gray-700" >
                Password
            </label>
            <input id="password" type="password" name="password" placeholder="Enter password" autoComplete="on" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />
        
            <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                Signup
            </button>

            {error && (
                <div className="text-red-600 text-sm mt-2">
                {error}
                </div>
            )}
        </form>
    )
}

