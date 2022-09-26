import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, SwipeableDrawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface MenuItem {
    name: string;
    path: string;
}

export default function Menu() {
    const theme = useTheme();
    let navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const isIOS: boolean = false; //TODO implement provider

    useEffect(() => {
        navigate('/home');
    }, []);

    useEffect(() => {
        const setLogoutOption = async () => {
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
        };
        setLogoutOption();
    }, [isMenuOpen])
    
    function navigateMenu(item: MenuItem): void {
        navigate(item.path);
        setIsMenuOpen(false);
    }

    return <>
        <Paper sx={{minWidth: '100vw', minHeight: '100vh', backgroundColor: theme.baseColors.primary, borderRadius: '0px', display: 'block'}}>
            <div style={{minWidth: '100vw', height: '5vh', display: 'flex'}}>
                <IconButton 
                    size='large'
                    color='secondary'
                    aria-label='Menu'
                    sx={{ marginLeft: 'auto', marginRight: '10px', marginTop: '10px' }}
                    onClick={() => setIsMenuOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor='right'
                    open={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                    onOpen={() => setIsMenuOpen(true)}
                    PaperProps={{
                        sx: {
                            bgcolor: theme.baseColors.secondary,
                            color: 'white',
                            opacity: 0.9
                        }
                    }}  
                    disableDiscovery={isIOS}
                >
                    <Box
                        sx={{ width: '40vw' }}
                        role='presentation'
                        onClick={() => setIsMenuOpen(false)}
                        onKeyDown={() => setIsMenuOpen(false)}
                    >
                        <List>
                            {menuList.map((item, index) => (
                                <>
                                    {index !== 0 && 
                                        <Divider />}
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton onClick={(event) => navigateMenu(item)}>
                                            <ListItemText sx={{textAlign: 'center'}}>
                                                {item.name}
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </>
                            ))}
                        </List>
                    </Box>
                </SwipeableDrawer>
            </div>
            <div style={{minWidth: '100vw', height: '95vh', display: 'flex'}}>
                <Outlet />
            </div>
        </Paper>
    </>;
}