import React, { FC } from 'react';
import { Box, Card, CardContent, styled, Typography, Button } from '@mui/material';
import { ProductCardProps } from './types';
import { useNavigate } from 'react-router-dom';

const ProductContainer = styled(Card)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    height: '25rem'
}));

const ProductImage = styled('img')<{ src: String; }>(({ src }) => ({
    // background: `url('${src}')`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    objectFit: 'cover',
    width: '100%',
    height: '100px',
}));

const ProductContent = styled(CardContent)(({ theme }) => ({
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
    // gap: '1rem',
    // padding: theme.spacing(2),
}));

const ProductDescription = styled(Box)(() => ({
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'column',
}));

const ProductHeader = styled(Box)(() => ({
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
}));

const ProductFooter = styled(Box)(() => ({
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
}));

const ProductCard: FC<ProductCardProps> = ({
    short_description,
    long_description,
    price,
    product_images,
    id
}) => {
    const navigate = useNavigate();
    
    const openProductPage = () => {
        navigate(`/product/${id}`)
    }

    return (
        <ProductContainer onClick={openProductPage}>
            <ProductImage src={product_images[0].url} />
            <ProductContent>
                <ProductDescription>
                    <ProductHeader>
                        <Typography variant='h5'>
                            {short_description}
                        </Typography>
                    </ProductHeader>
                    <Typography>{long_description}</Typography>
                </ProductDescription>
                <ProductFooter>
                    <Typography sx={{ fontWeight: 'bold' }}>${price} MXN</Typography>
                    <Button variant='contained'>Agregar al carrito</Button>
                </ProductFooter>
            </ProductContent>
        </ProductContainer>
    );
};

export default ProductCard;
