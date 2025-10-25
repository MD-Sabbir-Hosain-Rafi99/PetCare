import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import GoogleLoginButton from '../components/GoogleLoginButton'
import toast from 'react-hot-toast'

const Login = () => {
    const [error, setError] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setEmailInput(email);

        signIn(email, password)
            .then((res) => {
                const user = res.user;
                navigate(`${location.state ? location.state : '/'}`)
                toast.success("Login Sucessfully!")
            })
            .catch((err) => {
                const errorCode = err.code;
                setError(errorCode);
                toast.error(errorCode)
            })
    }

    return (
        <section className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Login Page!</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {error && <p className='text-red-500 text-xs'>{error}</p>}

                    {/* Forgot Password */}
                    <div>
                        <Link
                            to="/auth/forget-password"
                            state={{ email: emailInput }}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </button>
                    <GoogleLoginButton />

                    {/* Register */}
                    <div>
                        <p className="font-bold">
                            Don't Have An Account? <Link className="text-sm text-blue-600 hover:underline" to='/auth/registration'>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login
