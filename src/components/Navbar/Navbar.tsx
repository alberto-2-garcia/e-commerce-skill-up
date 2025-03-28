import { useEffect } from 'react';
import { AppBar, Box, Typography, Button, Stack, styled, IconButton } from '@mui/material';
import { Person, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../store';
import NavbarSearchBar from './NavbarSearchBar/NavbarSearchBar';
import { setShoppingCart } from '../../store/shoppingCartSlice';

const NavbarStack = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2)
}));

const NavbarLink = styled(Link)(({ theme }) => ({
    color: theme.palette.common.white
}))

export default function Navbar() {
    const { accessToken, user } = useAppSelector(
        (state) => state.user
    );

    const dispatch = useAppDispatch();

    const shoppingCartData = useAppSelector(
        (state) => state.shoppingCart
    );

    useEffect(() => {
        if(accessToken && !shoppingCartData.user_id) {
            dispatch(setShoppingCart({...shoppingCartData, user_id: user}));
        }
    }, [accessToken, dispatch, shoppingCartData, user])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <NavbarStack
                    direction='row'
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={0}
                >
                    <NavbarLink to='/' sx={{ textDecoration: 'none' }}>
                        <Typography variant="h6">Ecommerce</Typography>
                    </NavbarLink>
                    <NavbarSearchBar />
                    <Stack
                        spacing={1}
                        direction="row"
                        alignItems="center"
                    >
                        {accessToken
                        ?
                            <>
                                <NavbarLink to='/purchase-orders'>
                                    <Button color="inherit">Ordenes</Button>
                                </NavbarLink>
                                <NavbarLink to='/profile'>
                                    <IconButton color='inherit'>
                                        <Person />
                                    </IconButton>
                                </NavbarLink>
                                <NavbarLink to='/shopping-cart'>
                                    <IconButton color='inherit'>
                                        <ShoppingCartOutlined />
                                    </IconButton>
                                </NavbarLink>
                            </>
                        :
                            <>
                                <NavbarLink to='/login'>
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