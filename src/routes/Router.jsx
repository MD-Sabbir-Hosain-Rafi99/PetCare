import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                // Index true default path set kora
                index: true,
                element: <Home />,
            },
            {
                path: '/services',
                element: <h2>Services Page</h2>,
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/auth/login',
                        element: <Login />,
                    },
                    {
                        path: '/auth/registration',
                        element: <Registration />, 
                    },
                ]
            },
            {
                path: '/myprofile',
                element: <h2>myProfile</h2>,
            },
            {
                path: '/*',
                element: <h2>Error-4O4</h2>,
            },
        ]
    }
]);

export default router;
