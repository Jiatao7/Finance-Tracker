import { useState } from "react"
import { useUserContext } from "../context/UserContext"
import { useAccountSetup } from "../hooks/useAccountSetup"

export default function Setup() {
    const {accountSetup, error, isLoading} = useAccountSetup()
    const {user} = useUserContext()

    const handleSubmit = async(formData) => {
        const displayName = formData.get("display-name")
        const balance = Number(formData.get("balance"))
        accountSetup(displayName, balance)
    }

    return (
        <form className="bg-white rounded-lg shadow-2xl p-6 mb-16 max-w-lg space-y-4 mx-auto" action={handleSubmit} >
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">Complete Account Setup for {user.username}</h3>

            <label htmlFor="Display Name" className="block text-sm font-medium text-gray-700" >
                Display Name
            </label>
            <input id="display-name" type="text" name="display-name" placeholder="Enter preferred display name" autoComplete="on" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />

            <label htmlFor="Initial Balance" className="block text-sm font-medium text-gray-700" >
                Initial Balance
            </label>
            <input id="balance" type="number" name="balance" placeholder="Enter initial balance" autoComplete="on" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent" />

            <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
                Submit
            </button>

            {error && (
                <div className="text-red-600 text-sm mt-2">
                {error}
                </div>
            )}
        </form>
    )
}
