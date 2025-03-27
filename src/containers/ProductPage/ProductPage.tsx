import { useNavigate, useParams } from "react-router";
import { Box, Container, Stack, Typography, Button, Rating, Divider, Grid2 as Grid, styled, Paper } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import useProducts from "../../hooks/useProducts/useProducts";
import QuantityPicker, { useQuantityPicker } from "../../components/QuantityPicker/QuantityPicker";
import { useAppDispatch } from "../../store";
import { addProduct } from "../../store/shoppingCartSlice";


const ProductImage = styled('img')(() => ({
    objectFit: 'cover',
    width: '100%',
    height: '40vh',
}));

function ProductPage() {
    const { productId } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const { product } = useProducts({ productId: productId || '' });

    const quantityPickerProps = useQuantityPicker({ quantityDefault: 1 })

    const addProductToShoppingCart = () => {
        dispatch(addProduct({ id: Number(productId), quantity: quantityPickerProps.quantity }));
        navigate('/shopping-cart');
    }

    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                {product
                ?
                    <Grid container spacing={2} sx={{ marginTop: 8 }}>
                        <Grid size={5}>
                            <ProductImage src={product.product_images[0].url} />
                        </Grid>
                        <Grid size={7}>
                            <Paper sx={{ padding: 4 }} elevation={2}>
                                <Typography variant="h3">{product.short_description}</Typography>
                                <Typography variant="subtitle2">Vendido por {product.brand}</Typography>
                                <Typography variant="subtitle2">SKU: {product.sku}</Typography>
                                <Stack direction="row" spacing={1}>
                                    <Typography>{product.rating}</Typography>
                                    <Rating value={product.rating} precision={0.5} readOnly/>
                                    <Typography>{product.reviews} calificaciones</Typography>
                                </Stack>
                                <Divider sx={{ marginTop: 2, marginBottom: 2 }}/>
                                <Stack direction="column" alignItems="flex-end" spacing={2}>
                                    <Typography variant="h6">${product.price} MXN</Typography>
                                    <Typography>Disponible: {product.available_quantity} {product.uom}</Typography>
                                    <QuantityPicker {...quantityPickerProps} disableDecrease={!quantityPickerProps.quantity}/>
                                    <Button variant="contained" onClick={addProductToShoppingCart}>Agregar al carrito</Button>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                :
                    <></>
                }
            </Container>
        </Box>
    )
}

export default ProductPage;