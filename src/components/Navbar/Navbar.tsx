import * as React from 'react';
import { AppBar, Box, Typography, Button, IconButton, Stack, styled } from '@mui/material';
import { Person, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarSearchBar from './NavbarSearchBar/NavbarSearchBar';

const NavbarStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2)
}));

const NavbarLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.secondary
}))

const WHITE = "#FFFFFF";

export default function ButtonAppBar() {
    const { accessToken } = useSelector(
        (state) => state.user
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                    <NavbarStack direction='row' justifyContent="space-between" spacing={0}>
                        <NavbarLink to='/'>
                            <Typography variant="h6" color="common.white">
                                Ecommerce
                            </Typography>
                        </NavbarLink>
                        <NavbarSearchBar />
                        <Stack spacing={1} direction="row">
                            {accessToken
                            ?
                                <>
                                    <NavbarLink to='/purchase-orders' sx={{ color: WHITE }}>
                                        <Button color="inherit">Ordenes</Button>
                                    </NavbarLink>
                                    <NavbarLink to='/profile' sx={{ color: WHITE }}>
                                        <Person />
                                    </NavbarLink>
                                    <NavbarLink to='/shopping-cart' sx={{ color: WHITE }}>
                                        <ShoppingCartOutlined />
                                    </NavbarLink>
                                </>
                            :
                                <>
                                    <NavbarLink to='/login' sx={{ color: WHITE }}>
                                        <Button color="inherit">Iniciar sesion</Button>
                                    </NavbarLink>
                                </>
                            }
                        </Stack>
                    </NavbarStack>
            </AppBar>
        </Box>
    );
}