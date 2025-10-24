import React from 'react'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    return (
        <>
            <Outlet />
        </>

    )
}

export default AuthLayout
