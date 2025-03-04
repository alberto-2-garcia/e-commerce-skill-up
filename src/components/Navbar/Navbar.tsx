import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Stack, styled, TextField } from '@mui/material';
import { Person, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavbarToolbar = styled(Toolbar)(() => ({
    width: "100%",
    padding: 0
}));

const NavbarStack = styled(Stack)(() => ({
    width: "100%"
}));

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                {/* <NavbarToolbar> */}
                    <NavbarStack direction='row' justifyContent="space-between" spacing={0}>
                        <Link to='/'>
                            <Typography variant="h6" component="div">
                                Ecommerce
                            </Typography>
                        </Link>
                        <Link to='/products'>Products</Link>
                        {/* <TextField /> */}
                        <Stack spacing={1} direction="row">
                            <Link to='/purchase-orders'>
                                <Button color="inherit">Ordenes</Button>
                            </Link>
                            <Person />
                            <Link to='/shopping-cart'>
                                <ShoppingCartOutlined />
                            </Link>
                        </Stack>
                    </NavbarStack>
                {/* </NavbarToolbar> */}
            </AppBar>
        </Box>
    );
}