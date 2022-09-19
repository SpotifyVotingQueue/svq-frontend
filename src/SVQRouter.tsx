import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import ErrorPage from './ErrorPage';

export default function SVQRouter() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage message="Das angeforderte Element konnte unter dieser URL nicht gefunden werden" title="Element nicht gefunden!" />
        }
    ]);

    return <>
            <div>
                {/* nav could go here */}
            </div>
            <RouterProvider router={router} />
    </>;
}