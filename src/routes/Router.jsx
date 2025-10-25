import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/services",
                element: <PrivateRoute>
                    <Services />
                </PrivateRoute>,
            },
            {
                path: "/auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "/auth/login",
                        element: <Login />
                    },
                    {
                        path: "/auth/registration",
                        element: <Registration />
                    },
                ],
            },
            {
                path: "/myprofile",
                element: <h2>myProfile</h2>
            },
            {
                path: "/service/:id",
                element: <PrivateRoute>
                    <ServiceDetails />
                </PrivateRoute>,

            },
            {
                path: "/*",
                element: <h2>Error - 404</h2>
            },
        ],
    },
]);

export default router;
