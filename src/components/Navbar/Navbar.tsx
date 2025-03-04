import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Stack, styled, TextField } from '@mui/material';
import { Person, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const NavbarStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2)
}));

const NavbarLink = styled(Link)(({ theme }) => ({
    color: theme.palette.text.secondary
}))

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                    <NavbarStack direction='row' justifyContent="space-between" spacing={0}>
                        <NavbarLink to='/'>
                            <Typography variant="h6" component="div">
                                Ecommerce
                            </Typography>
                        </NavbarLink>
                        <NavbarLink to='/products'>Products</NavbarLink>
                        {/* <TextField /> */}
                        <Stack spacing={1} direction="row">
                            <NavbarLink to='/purchase-orders'>
                                <Button color="inherit">Ordenes</Button>
                            </NavbarLink>
                            <Person />
                            <NavbarLink to='/shopping-cart'>
                                <ShoppingCartOutlined />
                            </NavbarLink>
                        </Stack>
                    </NavbarStack>
            </AppBar>
        </Box>
    );
}