import { FC } from 'react';
import { Box, Card, CardContent, Typography, Button, Stack, CardMedia, CardActions, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProductCardProps } from './types';
import { PRODUCT_PAGE } from '../../../constants/routesConstants';
import { useAppDispatch } from '../../../store';
import { addProduct } from '../../../store/shoppingCartSlice';


const ProductCard: FC<ProductCardProps> = ({
    short_description,
    long_description,
    price,
    product_images,
    id
}) => {
    const productLink = PRODUCT_PAGE.replace(':productId', id.toString());

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const addProductToShoppingCart = () => {
        dispatch(addProduct({ id, quantity: 1 }));
        navigate('/shopping-cart');
    }

    return (
        <Card variant="outlined" sx={{ height: '100%' }}>
            <Stack justifyContent="space-between" sx={{ height: '100%' }}>
                <CardActionArea onClick={() => navigate(productLink)} sx={{ height: '100%' }}>
                    <Stack sx={{ height: '100%' }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={product_images[0].url}
                            title="green iguana"
                        />
                        <CardContent sx={{ height: '100%' }}>
                            <Stack direction="column" justifyContent="space-between" sx={{ height: '100%' }}>
                                <Box>
                                    <Typography variant='h5'>
                                        {short_description}
                                    </Typography>
                                    <Typography>{long_description}</Typography>
                                </Box>
                                <Typography sx={{ fontWeight: 'bold' }}>${price} MXN</Typography>
                            </Stack>
                        </CardContent>
                    </Stack>
                </CardActionArea>
                <CardActions>
                    <Button
                        variant='contained'
                        onClick={addProductToShoppingCart}
                    >
                        Agregar al carrito
                    </Button>
                </CardActions>
            </Stack>
        </Card>
    );
};

export default ProductCard;
