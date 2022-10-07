import { Popover, Transition } from '@headlessui/react';
import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DeviceContext, MenuContext, MenuContextIF } from '../../Providers';
import { isDebug } from '../../util/debug/DebugEnv';
import { MenuButton } from '../../util/widgets/Buttons';
import './Menu.css';

export interface MenuItem {
    name: string;
    path: string;
}

export default function Menu() {
    let navigate = useNavigate();

    let menu: MenuContextIF = useContext(MenuContext); 

    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname === '/') {
            navigate('/home');
        }
    }, []);

    return <>
        <div style={{minWidth: '100vw', minHeight: '100%', borderRadius: '0px', display: 'block'}} className="backgroundGradient text-primary">
            <div style={{minWidth: '100vw', height: '10vh', display: 'flex', justifyContent: 'space-between'}} className="bg-backgroundDark fixed top-0 left-0 z-10">
                {menu.left}
                {menu.middle}
                {menu.right}
            </div>
            <div style={{minWidth: '100vw', height: '100%', display: 'flex'}} className="mt-20">
                <Outlet />
            </div>
        </div>
    </>;
}