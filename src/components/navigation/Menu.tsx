import { Popover, Transition } from '@headlessui/react';
import React, { useEffect, useState, useContext, Fragment } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DeviceContext } from '../../Providers';
import { isDebug } from '../../util/debug/DebugEnv';
import { MenuButton } from '../../util/widgets/Buttons';
import './Menu.css';

interface MenuItem {
    name: string;
    path: string;
}

export default function Menu() {
    let navigate = useNavigate();

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

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

            if (isDebug()) {
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
    }

    return <>
        <div style={{minWidth: '100vw', minHeight: '100%', borderRadius: '0px', display: 'block'}} className="backgroundGradient text-primary">
            <div style={{minWidth: '100vw', height: '10vh', display: 'flex'}} className="bg-backgroundDark fixed top-0 left-0 z-10">
                <Popover className="relative">
                    <Popover.Button>
                        {MenuButton()}
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 top-0">
                            <div className='overflow-hidden shadow-lg ring-1 ring-primaryDark ring-opacity-5' style={{minWidth: '50vw', minHeight: '100vh'}}>
                                <div className='relative bg-backgroundDark text-primary opacity-80 flex' style={{ minWidth: '50vw', minHeight: '100vh' }}>
                                    <div className='mt-auto mb-auto flex flex-col justify-evenly min-h-screen-50'>
                                        {menuList.map((item, index) => 
                                            <div key={index} className='text-center' style={{minWidth: '50vw', minHeight: '10vh'}}>
                                                <button className='text-primary fill-primary' style={{minWidth: '50vw', minHeight: '10vh'}} onClick={() => navigateMenu(item)}>
                                                    {item.name}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <button style={{ height: '5vh', width: '5vh', margin: 'auto', marginRight: '2.5vh', display: 'flex' }}
                    className="text-primary fill-primaryDark bg-primaryDark rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        className="w-6 h-6" style={{ height: '5vh', width: '5vh', margin: 'auto'}}>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </button>
            </div>
            <div style={{minWidth: '100vw', height: '100%', display: 'flex'}} className="mt-20">
                <Outlet />
            </div>
        </div>
    </>;
}