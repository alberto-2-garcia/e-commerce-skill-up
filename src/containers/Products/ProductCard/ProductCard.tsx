import { Box, Card, CardContent, styled, Typography } from '@mui/material';

const ProductContainer = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
}));

const ProductImage = styled('div')(({ src }) => ({
    background: `url('${src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '20rem',
    height: '12rem',
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: theme.spacing(2),
}));

const ProductDescription = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
}));

const ProductHeader = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const ProductFooter = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const ProductCard = ({
    short_description,
    long_description,
    available_quantity,
    price,
    uom,
    status,
    brand,
    product_images,
}) => {
    return (
        <ProductContainer>
            <ProductImage src={product_images[0].url} />
            <ProductContent>
                <ProductDescription>
                    <ProductHeader>
                        <Typography variant='h5'>
                            {short_description}
                        </Typography>
                        <Typography>{status}</Typography>
                    </ProductHeader>
                    <Typography variant='caption'>Hecho por {brand}</Typography>
                    <Typography>{long_description}</Typography>
                </ProductDescription>
                <ProductFooter>
                    <Typography>${price} MXN</Typography>
                    <Typography>
                        {available_quantity} {uom}
                    </Typography>
                </ProductFooter>
            </ProductContent>
        </ProductContainer>
    );
};

export default ProductCard;
