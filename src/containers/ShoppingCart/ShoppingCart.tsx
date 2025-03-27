import { Container, Typography, Paper, styled, Grid2 as Grid, Button, Stack, Divider, Box } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents'
import { useShoppingCart } from '../../hooks/useShoppingCart/useShoppingCart';
import useProducts from '../../hooks/useProducts/useProducts';
import ProductRow from '../../components/ProductRow/ProductRow';
import { useAppSelector } from '../../store';
import { useNavigate } from 'react-router'
import { formatMoney } from '../../utils/utils';

const ProductsContainer = styled(Paper)(() => ({
    padding: 8,
    textAlign: 'center'
}))

const ProductsHeaders = styled(Grid)(() => ({
    color: "#444444",
    border: "1px solid #999999",
    borderRadius: 5,
    marginBottom: 8
}))

const ConfirmPurchaseContainer = styled(Paper)(() => ({
    width: '12rem',
    height: '5rem',
    padding: 16,
    
}));

function ShoppingCart() {
    const { handleCheckout } = useShoppingCart();
    const navigate = useNavigate();
    const { products, shopping_cart_id } = useAppSelector(
        (state) => state.shoppingCart
    );

    const { accessToken } = useAppSelector(
        (state) => state.user
    );
    
    const { products: productsList } = useProducts({ productId: '' });

    const handleConfirmPurchaseOnClick = () => {
        handleCheckout({ shopping_cart_id });
    }

    const shoppingCartProducts = products.map(pro => ({ ...pro, ...productsList.find(p => p.id === pro.id)! }));

    const totalShoppingCart = shoppingCartProducts?.reduce((acum, curr) => (acum + (curr.price * curr.quantity)), 0);

    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Carrito de compras</PageTitle>
                <ProductsContainer>
                    {shoppingCartProducts.length
                    ?
                        <>
                            <ProductsHeaders container spacing={1}>
                                <Grid size={2}></Grid>
                                <Grid size={8}><Typography>Producto</Typography></Grid>
                                <Grid size={1}><Typography>Precio</Typography></Grid>
                                <Grid size={1}><Typography>Total</Typography></Grid>
                            </ProductsHeaders>
                            <Stack
                                spacing={0}
                                divider={<Divider orientation="horizontal" flexItem />}
                            >
                                {productsList.length && shoppingCartProducts?.map(product => (
                                    <ProductRow key={product.id} {...product} />
                                ))}
                            </Stack>
                        </>
                    :
                        <Stack sx={{ height: '15rem', margin:0 }} justifyContent="center" spacing={1}>
                            <Typography variant='h4'>Tu carrito está vacío</Typography>
                            <Typography variant='subtitle1'>Agrega productos a tu carrito</Typography>
                            {!accessToken &&
                                <Stack direction="row" justifyContent="center" spacing={2}>
                                    <Button variant="contained" onClick={() => navigate('/login')}>Iniciar sesión</Button>
                                    <Button variant="outlined" onClick={() => navigate('/sign-up')}>Crear cuenta</Button>
                                </Stack>
                            }
                        </Stack>
                    }
                </ProductsContainer>
                <Stack
                    direction="column"
                    spacing={1}
                    sx={{
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    marginTop: 2
                    }}
                >
                    <ConfirmPurchaseContainer>
                    <Stack
                        direction="column"
                        spacing={1}
                        sx={{
                        justifyContent: "center",
                        alignItems: "flex-end",
                        height: '100%'
                        }}
                    >
                        <Typography>Total: {formatMoney(totalShoppingCart)}</Typography>
                        <Button variant='contained' disabled={!shoppingCartProducts.length} onClick={handleConfirmPurchaseOnClick}>Confirmar compra</Button>
                    </Stack>
                    </ConfirmPurchaseContainer>
                </Stack>
            </Container>
        </Box>
    )
}

export default ShoppingCart;
