import React, { useState } from 'react';
import { BurgerMenu } from './components/navigation/menuitems/BurgerMenu';
import ProfilePlaceholder from './components/navigation/menuitems/ProfilePlaceholder';
import { Configuration, OAuthControllerApi, PartyControllerApi, PlaylistControllerApi, TestControllerApi, TrackControllerApi, TrackDto } from './services-gen';
import { v4 as uuidv4 } from 'uuid';

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
}
export const UserContext = React.createContext<UserContextIF>({ username: undefined, setUsername: undefined });

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
export const MenuContext = React.createContext<MenuContextIF>({ left: <BurgerMenu />, setLeft: undefined as any, middle: undefined, setMiddle: undefined as any, right: <ProfilePlaceholder />, setRight: undefined as any });

export interface APIContextIF {
    oauth: OAuthControllerApi;
    party: PartyControllerApi;
    test: TestControllerApi;
    track: TrackControllerApi;
    playlists: PlaylistControllerApi;
}
export const APIContext = React.createContext<APIContextIF>({ oauth: undefined as any, party: undefined as any, test: undefined as any, track: undefined as any, playlists: undefined as any });

export interface SessionContextIF {
    token?: string;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
    clientSession: string;
}
export const SessionContext = React.createContext<SessionContextIF>({ token: undefined, setToken: undefined as any, clientSession: undefined as any });

export interface SearchContextIF {
    result?: TrackDto[];
    setResult: React.Dispatch<React.SetStateAction<TrackDto[] | undefined>>;
}
export const SearchContext = React.createContext<SearchContextIF>({ result: undefined as any, setResult: undefined as any });

export default function Providers(props: ProviderProps) {

    function determineIOS(): boolean {
        return typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    const configuration: Configuration = new Configuration({basePath: process.env.REACT_APP_BACKEND_BASE_URL});

    const [username, setUsername] = useState(undefined as string | undefined);
    const [token, setToken] = useState(undefined as string | undefined);
    const [queueId, setQueueId] = useState(undefined as string | undefined);
    const [joinUrl, setJoinUrl] = useState(undefined as string | undefined);

    const [left, setLeft] = useState(<BurgerMenu />);
    const [middle, setMiddle] = useState(undefined as JSX.Element | undefined);
    const [right, setRight] = useState(<ProfilePlaceholder />);

    const [result, setResult] = useState(undefined as TrackDto[] | undefined);

    return <>
        <DeviceContext.Provider value={{ isIOS: determineIOS() }}>
            <APIContext.Provider value={{ oauth: new OAuthControllerApi(configuration), party: new PartyControllerApi(configuration), test: new TestControllerApi(configuration), track: new TrackControllerApi(configuration), playlists: new PlaylistControllerApi(configuration) }}>
                <SessionContext.Provider value={{ token: token, setToken: setToken, clientSession: uuidv4() }}>
                    <UserContext.Provider value={{ username, setUsername }}>
                        <MenuContext.Provider value={{ left, setLeft, middle, setMiddle, right, setRight }}>
                            <QueueInformationContext.Provider value={{ queueId, setQueueId, joinUrl, setJoinUrl }}>
                                <SearchContext.Provider value={{ result: result, setResult: setResult }}>
                                    {props.children}
                                </SearchContext.Provider>
                            </QueueInformationContext.Provider>
                        </MenuContext.Provider>
                    </UserContext.Provider>
                </SessionContext.Provider>        
            </APIContext.Provider>
        </DeviceContext.Provider>
    </>
}