import { useParams } from "react-router-dom";
import { Box, Container, Stack, Typography, Button, Rating, Divider, Grid2 as Grid, styled, Paper, ButtonGroup, IconButton } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { PageTitle } from "../../components/StyledComponents/StyledComponents";
import useProducts from "../../hooks/useProducts/useProducts";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductImage = styled('img')<{ src: String; }>(({ src }) => ({
    objectFit: 'cover',
    width: '100%',
    height: '40vh',
}));

function ProductPage() {
    const { productId } = useParams();
    const { product } = useProducts({ productId: productId || '' });

    const [quantity, setQuantity] = useState<number>(1);

    const incrementQuantity = () => {
        setQuantity(quantity => quantity+1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity-1);
        }
    }

    return (
        <Box>
            <Navbar />
            <Container maxWidth='xl'>
                {!!product
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
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <IconButton onClick={decrementQuantity}><RemoveIcon /></IconButton>
                                        <Typography>{quantity}</Typography>
                                        <IconButton onClick={incrementQuantity}><AddIcon /></IconButton>
                                    </Stack>
                                    <Button variant="contained">Agregar al carrito</Button>
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