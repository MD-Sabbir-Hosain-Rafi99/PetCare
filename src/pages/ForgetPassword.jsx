import React, { useState } from 'react';
import { useLocation } from 'react-router';
const ForgetPassword = () => {
    const location = useLocation();
    const prefilledEmail = location.state?.email || "";
    const [email, setEmail] = useState(prefilledEmail);

    const handleReset = (e) => {
        e.preventDefault();
        if (!email) return;

        window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`, "_blank");
    }
    return (
        <section className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Reset Password</h2>

                <form onSubmit={handleReset} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ForgetPassword
