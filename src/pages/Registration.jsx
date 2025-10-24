import React from 'react'
import { Link } from 'react-router'

const Registration = () => {
    return (
        <section class="flex items-center justify-center min-h-screen bg-blue-50">
            <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
                <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Registration!</h2>

                <form class="space-y-4">
                    {/* Name */}
                    <div className="">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Photo URL */}
                    <div className="">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/*  Email  */}
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/*  Password  */}
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Registration */}
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Registration
                    </button>
                    <div>
                        <p className="font-bold">Already Have An Account ? <Link class="text-sm text-blue-600 hover:underline" to='/auth/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Registration
