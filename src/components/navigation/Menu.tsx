import React, { useEffect, useState, useContext } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DeviceContext } from '../../Providers';

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
        <div style={{minWidth: '100vw', minHeight: '100vh', borderRadius: '0px', display: 'block'}} className="bg-backgroundLight text-primary">
            <div style={{minWidth: '100vw', height: '5vh', display: 'flex'}}>
                
            </div>
            <div style={{minWidth: '100vw', height: '95vh', display: 'flex'}}>
                <Outlet />
            </div>
        </div>
    </>;
}