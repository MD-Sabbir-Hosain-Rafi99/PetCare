import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import toast from 'react-hot-toast';
import GoogleLoginButton from '../components/GoogleLoginButton';

const Registration = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [passwordvaidation, setPasswordValidation] = useState("")
    // const [error, setError] = useState("")
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        // console.log(name)
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((res) => {
                const user = res.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo });
                        navigate('/');
                    }).catch((err) => {
                        console.log(err)
                        setUser(user);
                    })
            }).catch((err) => {
                const errorCode = err.code;
                // const errorMessage = err.message;
                console.log(errorCode)

                // setError(errorCode)
            })


        if (!/[A-Z]/.test(password)) {
            setPasswordValidation("Password must contain at least one uppercase letter (A–Z)");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setPasswordValidation("Password must contain at least one lowercase letter (a–z)");
            return;
        }
        else if (password.length < 6) {
            setPasswordValidation("Password must be at least 6 characters long");
            return;
        }

        setPasswordValidation("");
        toast.success("Registration successful!");
        form.reset();
    }
    return (
        <section className="flex items-center justify-center min-h-screen bg-blue-50">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Please Registration!</h2>

                <form onSubmit={handleRegister} className="space-y-4">
                    {/* Name */}
                    <div className="">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Name"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Photo URL */}
                    <div className="">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Photo URL"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/*  Email  */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/*  Password  */}
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
                    {passwordvaidation && <p className="text-red-500 text-sm mb-3">{passwordvaidation}</p>}

                    {/* Registration */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Registration
                    </button>
                    <GoogleLoginButton />
                    <div>
                        <p className="font-bold">Already Have An Account ? <Link className="text-sm text-blue-600 hover:underline" to='/auth/login'>Login</Link></p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Registration
