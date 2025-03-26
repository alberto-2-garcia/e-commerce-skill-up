import { Box, Container, Grid2 as Grid } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import { PageTitle } from '../../components/StyledComponents/StyledComponents'
import ProductCard from '../Products/ProductCard/ProductCard';
import useProducts from '../../hooks/useProducts/useProducts';


function Home() {
    const { products } = useProducts({ productId: '' });

    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                <PageTitle variant='h4'>Home</PageTitle>
                <Grid container spacing={2} alignItems="stretch">
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

export default Home;
