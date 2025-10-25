import React from 'react'
import Navbar from '../components/Navbar'
import Banner from './Banner'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            {import.meta.env.VITE_name}
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout
