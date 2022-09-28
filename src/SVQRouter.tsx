import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import Menu from './components/navigation/Menu';
import ErrorPage from './ErrorPage';
import DeviceDebug from './util/debug/DeviceDebug';

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
                    path: 'debug',
                    element: <Outlet />,
                    children: [
                        {
                            path: 'device',
                            element: <DeviceDebug />
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