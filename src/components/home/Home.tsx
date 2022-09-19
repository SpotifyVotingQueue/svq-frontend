import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/system';
import React from 'react';

export default function Home() {
    const theme = useTheme();
    return <>
        <Container sx={{height: '40vh', margin: 'auto'}}>
            <Container sx={{display: 'flex'}}>
                <h1 style={{color: theme.baseColors.secondary, margin: 'auto'}}>Spotify Queue</h1>
            </Container>
            <Container>
                <Button variant='contained' color='secondary'
                    sx={{ display: 'block', marginTop: '60px', marginLeft: 'auto', marginRight: 'auto' }}
                >Start</Button>
                <br></br>
                <Button variant='contained' color='secondary'
                    sx={{ display: 'block', marginTop: '30px', marginLeft: 'auto', marginRight: 'auto' }}
                >Beitreten</Button>
            </Container>
        </Container>
    </>;
}