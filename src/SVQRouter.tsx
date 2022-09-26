import { Paper, useTheme } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import Menu from './components/navigation/Menu';
import ErrorPage from './ErrorPage';

export default function SVQRouter() {

    const theme = useTheme();

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Menu />,
            errorElement: <ErrorPage message="Das angeforderte Element konnte unter dieser URL nicht gefunden werden" title="Element nicht gefunden!" />,
            children: [
                {
                    path: 'home',
                    element: <Home />
                }
            ]
        }
    ]);

    return <>
        <RouterProvider router={router} />
    </>;
}