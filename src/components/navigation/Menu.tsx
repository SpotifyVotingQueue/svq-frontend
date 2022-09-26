import React, { useEffect, useState, useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DeviceContext } from '../../Providers';
import './Menu.css';

interface MenuItem {
    name: string;
    path: string;
}

export default function Menu() {
    let navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [menuList, setMenuList] = useState<MenuItem[]>([
        {
            name: 'Startseite',
            path: '/home'
        },
        {
            name: 'Information',
            path: '/info'
        },
        {
            name: 'Impressum',
            path: '/impressum'
        }
    ]);  

    const device = useContext(DeviceContext);

    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname === '/') {
            navigate('/home');
        }
    }, []);

    useEffect(() => {
        const setMenuOptions = async () => {
            //TODO: implement user provider
            if (false /*user.isLoggedIn*/) {
                setMenuList([
                    ...menuList,
                    {
                        name: 'Logout',
                        path: '/logout'
                    }
                ]);
            }

            if (process.env.REACT_APP_IS_DEBUG) {
                setMenuList([
                    ...menuList,
                    {
                        name: 'Debug Device',
                        path: '/debug/device'
                    }
                ]);
            }
        };
        setMenuOptions();
    }, [])
    
    function navigateMenu(item: MenuItem): void {
        navigate(item.path);
        setIsMenuOpen(false);
    }

    return <>
        <div style={{minWidth: '100vw', minHeight: '100vh', borderRadius: '0px', display: 'block'}} className="backgroundGradient text-primary">
            <div style={{minWidth: '100vw', height: '10vh', display: 'flex'}} className="bg-backgroundDark">
                <button style={{ height: '5vh', width: '5vh', margin: 'auto', marginLeft: '2.5vh', display: 'flex' }}
                    className="text-primary fill-primary"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        style={{ height: '5vh', width: '5vh', margin: 'auto' }}
                        width="24" height="24"
                        viewBox="0 0 24 24">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                </button>
                <button style={{ height: '5vh', width: '5vh', margin: 'auto', marginRight: '2.5vh', display: 'flex' }}
                    className="text-primary fill-primaryDark bg-primaryDark rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        className="w-6 h-6" style={{ height: '5vh', width: '5vh', margin: 'auto'}}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </button>
            </div>
            <div style={{minWidth: '100vw', height: '95vh', display: 'flex'}}>
                <Outlet />
            </div>
        </div>
    </>;
}