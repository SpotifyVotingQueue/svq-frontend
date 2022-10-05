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

export interface QueueInformationIF {
    queueId?: string;
    setQueueId?: React.Dispatch<React.SetStateAction<string | undefined>>;
    joinUrl?: string;
    setJoinUrl?: React.Dispatch<React.SetStateAction<string | undefined>>;
}
export const QueueInformationContext = React.createContext<QueueInformationIF>({ queueId: undefined, setQueueId: undefined, joinUrl: undefined, setJoinUrl: undefined });

export default function Providers(props: ProviderProps) {

    function determineIOS(): boolean {
        return typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    const [username, setUsername] = useState(undefined as string | undefined);
    const [token, setToken] = useState(undefined as string | undefined);
    const [queueId, setQueueId] = useState(undefined as string | undefined);
    const [joinUrl, setJoinUrl] = useState(undefined as string | undefined);

    return <>
        <DeviceContext.Provider value={{ isIOS: determineIOS() }}>
            <UserContext.Provider value={{ username, setUsername, token, setToken }}>
                <QueueInformationContext.Provider value={{ queueId, setQueueId, joinUrl, setJoinUrl }}>
                    {props.children}
                </QueueInformationContext.Provider>
            </UserContext.Provider>
        </DeviceContext.Provider>
    </>
}