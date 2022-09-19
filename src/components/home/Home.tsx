import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import React from 'react';

export default function Home() {
    const theme = useTheme();
    return <>
        <Paper sx={{minWidth: '100vw', minHeight: '100vh', backgroundColor: theme.baseColors.primary, borderRadius: '0px'}} />
    </>;
}