import { FC } from 'react';
import { Card, Typography, Grid2 as Grid, styled, Stack, Button } from '@mui/material';
import { ProductRow as ProductRowType } from '../../constants/shoppingCartTypes';
import QuantityPicker from "../../components/QuantityPicker/QuantityPicker";
import { useAppDispatch } from '../../store';
import { editProduct, eraseProduct } from '../../store/shoppingCartSlice';
import { formatMoney } from '../../utils/utils';

const ProductImage = styled('div')<{ src: string; alt: string; loading: string; }>(({ src }) => ({
    background: `url('${src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '8rem',
}));

const ProductRow: FC<ProductRowType> = ({ short_description, quantity, price, product_images, long_description, id }) => {
    const total = quantity * price;

    const dispatch = useAppDispatch();

    const increaseQuantity = () => {
        dispatch(editProduct({ id, quantity: quantity + 1 }));
    }

    const shouldRemoveProduct = quantity <= 1;
    
    const decreaseQuantity = () => {
        if (shouldRemoveProduct) {
            dispatch(eraseProduct({ id, quantity: quantity - 1 }));
        } else {
            dispatch(editProduct({ id, quantity: quantity - 1 }));
        }
    }

    const removeProduct = () => {
        dispatch(eraseProduct({ id, quantity: quantity - 1 }));
    }

    const quantityPickerProps = {
        increaseQuantity,
        decreaseQuantity,
        quantity
    }

    return (
        <Card sx={{ width: '100%' }}>
            <Grid container>
                <Grid size={2}>
                    <ProductImage
                        src={product_images?.[0].url}
                        alt={short_description}
                        loading="lazy"
                    />
                </Grid>
                <Grid size={8}>
                    <Stack
                        direction="column"
                        justifyContent="flex-start"
                        sx={{ paddingLeft: 2 }}
                    >
                        <Typography align='left' variant='h6'>{short_description}</Typography>
                        <Typography align='left'>{long_description}</Typography>
                        <Stack direction="row" spacing={1}>
                            <QuantityPicker {...quantityPickerProps} changeDecreaseIcon={shouldRemoveProduct}/>
                            <Button variant='text' onClick={removeProduct}>Eliminar producto</Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid size={1}><Typography>{formatMoney(price)}</Typography></Grid>
                <Grid size={1}><Typography>{formatMoney(total)}</Typography></Grid>
            </Grid>
        </Card>
    );
}

export default ProductRow;