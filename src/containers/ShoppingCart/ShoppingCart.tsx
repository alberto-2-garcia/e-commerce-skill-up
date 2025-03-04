import { Box, Container } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents'

function ShoppingCart() {
    return (
        <Box>
        <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Carrito de compras</PageTitle>
            </Container>
        </Box>
    )
}

export default ShoppingCart;
