import { createTheme, Theme } from '@mui/material';
import { PaletteColor } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import React, {useContext} from 'react';

declare module '@mui/material/styles' {
    interface Theme {
        baseColors: {
            primary: string;
            secondary: string;
        }
        button: string;
    }

    interface ThemeOptions {
        baseColors: {
            primary: string;
            secondary: string;
        }
        button?: string;
    }

    interface Palette {
        primary: PaletteColor;
        secondary: PaletteColor;
    }
}

interface ProviderProps {
    children?: React.ReactNode;
}

export interface DeviceContextIF {
    isIOS: boolean;
}

export const DeviceContext = React.createContext<DeviceContextIF>({isIOS: false});

export default function Providers(props: ProviderProps) {
    const globalTheme: Theme = createTheme({
        baseColors: {
            primary: '#C3073F',
            secondary: '#1A1A1D'
        },
        palette: {
            primary: {
                main: '#C3073F'
            },
            secondary: {
                main: '#1A1A1D'
            }
        }
    })

    function determineIOS(): boolean {
        return typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    }

    return <>
        <DeviceContext.Provider value={{isIOS: determineIOS()}}>
            <ThemeProvider theme={globalTheme}>
                {props.children}
            </ThemeProvider>
        </DeviceContext.Provider>
    </>
}