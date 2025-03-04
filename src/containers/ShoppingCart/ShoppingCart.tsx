import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents'
import { useShoppingCart } from '../../hooks/useShoppingCart/useShoppingCart';
import { Container, Typography, Paper, styled, Grid2 as Grid, Button, Stack, Divider, Box } from '@mui/material';
import ProductRow from '../../components/ProductRow/ProductRow';

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
  const { shoppingCart, handleCheckout } = useShoppingCart();

  const { products, shopping_cart_id } = shoppingCart;

  const handleConfirmPurchaseOnClick = () => {
    handleCheckout({ shopping_cart_id })
  }

    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Carrito de compras</PageTitle>
                <ProductsContainer>
                    <ProductsHeaders container spacing={1}>
                        <Grid size={2}><Typography>Product</Typography></Grid>
                        <Grid size={5}></Grid>
                        <Grid size={1}><Typography>Quantity</Typography></Grid>
                        <Grid size={2}><Typography>Price</Typography></Grid>
                        <Grid size={2}><Typography>Total</Typography></Grid>
                    </ProductsHeaders>
                    <Stack
                    spacing={0}
                    divider={<Divider orientation="horizontal" flexItem />}
                    >
                    {products?.map(product => (
                        <ProductRow key={product.id} {...product} />
                    ))}
                    </Stack>
                </ProductsContainer>
            </Container>
        </Box>
    )
}

export default ShoppingCart;
