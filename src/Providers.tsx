import React, { useState } from 'react';
import { BurgerMenu } from './components/navigation/menuitems/BurgerMenu';
import { profilePlaceholder } from './components/navigation/menuitems/ProfilePlaceholder';

interface ProviderProps {
    children?: React.ReactNode;
}

export interface DeviceContextIF {
    isIOS: boolean;
}
export const DeviceContext = React.createContext<DeviceContextIF>({ isIOS: false });

export interface UserContextIF {
    username?: string;
    setUsername?: React.Dispatch<React.SetStateAction<string | undefined>>;
    token?: string;
    setToken?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const UserContext = React.createContext<UserContextIF>({ username: undefined, setUsername: undefined, token: undefined, setToken: undefined });

export interface QueueInformationIF {
    queueId?: string;
    setQueueId?: React.Dispatch<React.SetStateAction<string | undefined>>;
    joinUrl?: string;
    setJoinUrl?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const QueueInformationContext = React.createContext<QueueInformationIF>({ queueId: undefined, setQueueId: undefined, joinUrl: undefined, setJoinUrl: undefined });

export interface MenuContextIF {
    left: JSX.Element;
    setLeft: React.Dispatch<React.SetStateAction<JSX.Element>>;
    middle?: JSX.Element;
    setMiddle: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
    right: JSX.Element;
    setRight: React.Dispatch<React.SetStateAction<JSX.Element>>;
}
export const MenuContext = React.createContext<MenuContextIF>({ left: <BurgerMenu />, setLeft: undefined as any, middle: undefined, setMiddle: undefined as any, right: profilePlaceholder(), setRight: undefined as any });

export default function Providers(props: ProviderProps) {

    function determineIOS(): boolean {
        return typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    const [username, setUsername] = useState(undefined as string | undefined);
    const [token, setToken] = useState(undefined as string | undefined);
    const [queueId, setQueueId] = useState(undefined as string | undefined);
    const [joinUrl, setJoinUrl] = useState(undefined as string | undefined);

    const [left, setLeft] = useState(<BurgerMenu />);
    const [middle, setMiddle] = useState(undefined as JSX.Element | undefined);
    const [right, setRight] = useState(profilePlaceholder());

    return <>
        <DeviceContext.Provider value={{ isIOS: determineIOS() }}>
            <UserContext.Provider value={{ username, setUsername, token, setToken }}>
                <MenuContext.Provider value={{ left, setLeft, middle, setMiddle, right, setRight }}>
                    <QueueInformationContext.Provider value={{ queueId, setQueueId, joinUrl, setJoinUrl }}>
                        {props.children}
                    </QueueInformationContext.Provider>
                </MenuContext.Provider>
            </UserContext.Provider>
        </DeviceContext.Provider>
    </>
}