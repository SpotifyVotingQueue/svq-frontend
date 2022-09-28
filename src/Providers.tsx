import React, { useState } from 'react';

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

export default function Providers(props: ProviderProps) {

    function determineIOS(): boolean {
        return typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    const [username, setUsername] = useState(undefined as string | undefined);
    const [token, setToken] = useState(undefined as string | undefined);

    return <>
        <DeviceContext.Provider value={{ isIOS: determineIOS() }}>
            <UserContext.Provider value={{ username, setUsername, token, setToken }}>
                {props.children}
            </UserContext.Provider>
        </DeviceContext.Provider>
    </>
}