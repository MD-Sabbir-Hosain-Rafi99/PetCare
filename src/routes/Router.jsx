
import React from "react";

import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import { createBrowserRouter } from "react-router";

// Optional loader example for ServiceDetails (fallback)
// If you prefer loader, uncomment and adapt the fetch path.
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        // errorElement: <div>Something went wrong</div>,
        children: [
            { index: true, element: <Home /> },

            // services list page
            { path: "/services", element: <Services /> },

            // auth nested routes (use relative child paths)
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "registration",
                        element: <Registration />
                    },
                ],
            },

            {
                path: "/myprofile",
                element: <h2>myProfile</h2>
            },

            // service details (route param id)
            {
                path: "/service/:id",
                element: <ServiceDetails />,
                /* Example loader (optional) — uncomment to use:
                loader: async ({ params }) => {
                  const res = await fetch("/petCareService.json");
                  const data = await res.json();
                  // find the matching service by id
                  return data.find(s => String(s.serviceId) === String(params.id)) || null;
                }
                */
            },

            // catch-all (404)
            {
                path: "/*",
                element: <h2>Error - 404</h2>
            },
        ],
    },
]);

export default router;
