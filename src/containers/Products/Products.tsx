import { Box, Container, Typography, Grid2 as Grid } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from './ProductCard/ProductCard';
import { useProducts } from '../../hooks/useProducts/useProducts';

function Products() {
    const { products } = useProducts();
    return (
        <Box>
        <Navbar />
            <Container maxWidth='xl'>
                <Typography>Products</Typography>
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
