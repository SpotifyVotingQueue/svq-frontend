import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/host/create-queue/Login';
import Menu from './components/navigation/Menu';
import ErrorPage from './ErrorPage';
import DebugPage from './util/debug/DebugPage';

export default function SVQRouter() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Menu />,
            errorElement: <ErrorPage message="Das angeforderte Element konnte unter dieser URL nicht gefunden werden" title="Element nicht gefunden!" />,
            children: [
                {
                    path: 'home',
                    element: <Home />
                },
                {
                    path: 'login/:next',
                    element: <Login />
                },
                {
                    path: 'create',
                    element: <Outlet />,
                },
                {
                    path: 'debug',
                    element: <Outlet />,
                    children: [
                        {
                            path: 'device',
                            element: <DebugPage />
                        }
                    ]
                }
            ]
        }
    ]);

    return <>
        <RouterProvider router={router} />
    </>;
}