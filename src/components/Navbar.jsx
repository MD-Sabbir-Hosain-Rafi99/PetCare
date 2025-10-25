import React, { useContext } from 'react';
import logo from '../assets/logonav.jpg';
import userIcon from '../assets/user.png';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser()
            .then(() => toast.success("Logout successfully!"))
            .catch((err) => console.log(err));
    };

    const menuItems = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/myprofile'>My Profile</NavLink></li>
            {!user && (
                <>
                    <li><Link to='/auth/login'>Login</Link></li>
                    <li><Link to='/auth/registration'>Registration</Link></li>
                </>
            )}
        </>
    );

    return (
        <nav className='bg-base-100 shadow-sm sticky top-0 z-50'>
            <div className="navbar w-11/12 mx-auto">

                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link to='/' className="flex items-center gap-2 ml-2">
                        <img className='w-10 h-10 rounded-full' src={logo} alt="logo" />
                        <h3 className="text-2xl font-bold">Pet Care Service</h3>
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/myprofile'>My Profile</NavLink></li>
                    </ul>
                </div>


                <div className="navbar-end flex items-center gap-2">

                    <div className="relative">
                        <div className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-2 border-blue-400">
                                <img className='w-12 h-12 rounded-full' alt="User Avatar" src={user ? user.photoURL : userIcon} />
                            </div>
                        </div>
                        {user && (
                            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                                {user.email}
                            </div>
                        )}
                    </div>

                    {user ? (
                        <button onClick={handleLogOut} className="btn btn-primary hidden lg:block">LogOut</button>
                    ) : (
                        <div className="hidden lg:flex gap-3">
                            <Link to="/auth/login" className="btn btn-primary">Login</Link>
                            <Link to="/auth/registration" className="btn btn-secondary">Registration</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
