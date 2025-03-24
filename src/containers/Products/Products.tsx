import { Box, Container, Typography, Grid2 as Grid, styled } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from './ProductCard/ProductCard';
import { useProducts } from '../../hooks/useProducts/useProducts';

const PageTitle = styled(Typography)(({ theme }) => ({
    padding: `${theme.spacing(2)} 0`
}))

function Products() {
    const { products } = useProducts();
    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Resultados</PageTitle>
                <Grid container spacing={2}>
                    {products?.map((product) => (
                        <Grid key={product.id} size={2}>
                            <ProductCard {...product} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Products;
