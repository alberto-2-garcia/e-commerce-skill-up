import * as React from 'react';
import { AppBar, Box, Typography, Button, IconButton, Stack, styled } from '@mui/material';
import { Person, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import NavbarSearchBar from './NavbarSearchBar/NavbarSearchBar';

const NavbarStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2)
}));

const NavbarLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.secondary
}))

const WHITE = "#FFFFFF";

export default function ButtonAppBar() {
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
                            <NavbarLink to='/purchase-orders' sx={{ color: WHITE }}>
                                <Button color="inherit">Ordenes</Button>
                            </NavbarLink>
                            <NavbarLink to='/login' sx={{ color: WHITE }}>
                                <Person />
                            </NavbarLink>
                            <NavbarLink to='/shopping-cart' sx={{ color: WHITE }}>
                                <ShoppingCartOutlined />
                            </NavbarLink>
                        </Stack>
                    </NavbarStack>
            </AppBar>
        </Box>
    );
}