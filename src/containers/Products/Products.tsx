import { Box, Container, Typography } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import ProductCard from './ProductCard/ProductCard';
import { useProducts } from '../../hooks/useProducts/useProducts';

function Products() {
    const { products } = useProducts();
    return (
        <Box>
        <Navbar />
            <Container>
                <Typography>Products</Typography>
                {products?.map(({ id, ...props }) => (
                    <ProductCard key={id} {...props} />
                ))}
            </Container>
        </Box>
    )
}

export default Products;
