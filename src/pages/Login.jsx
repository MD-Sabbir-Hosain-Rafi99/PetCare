import React, { use } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const Login = () => {

    const {signIn} = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((res) => {
            const user = res.user;
            console.log(user);
        }).catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            alert(errorCode, errorMessage)
        })
    }
    return (
        <section class="flex items-center justify-center min-h-screen bg-blue-50">
            <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
                <h2 class="text-3xl font-bold text-center text-blue-700 mb-6">Login Page!</h2>

                <form onSubmit={handleLogin} class="space-y-4">
                    {/* <!-- Email --> */}
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* <!-- Password --> */}
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* <!-- Forgot Password --> */}
                    <div class="">
                        <a href="#" class="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* <!-- Login Button --> */}
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </button>
                    {/* Register */}
                    <div>
                        <p className="font-bold">Don't Have An Account ? <Link class="text-sm text-blue-600 hover:underline" to='/auth/registration'>Register</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login
