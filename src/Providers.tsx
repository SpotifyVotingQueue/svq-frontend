import React from 'react';

interface ProviderProps {
    children?: React.ReactNode;
}

export interface DeviceContextIF {
    isIOS: boolean;
}

export const DeviceContext = React.createContext<DeviceContextIF>({isIOS: false});

export default function Providers(props: ProviderProps) {

    function determineIOS(): boolean {
        return typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    return <>
        <DeviceContext.Provider value={{isIOS: determineIOS()}}>
                {props.children}
        </DeviceContext.Provider>
    </>
}