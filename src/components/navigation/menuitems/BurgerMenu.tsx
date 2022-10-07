import React, { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuButton } from "../../../util/widgets/Buttons";
import { MenuItem } from "../Menu";
import { useNavigate } from "react-router-dom";
import { isDebug } from "../../../util/debug/DebugEnv";

export function BurgerMenu(): JSX.Element {
    let navigate = useNavigate();

    function navigateMenu(item: MenuItem): void {
        navigate(item.path);
    }

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

    return <Popover className="relative">
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
}