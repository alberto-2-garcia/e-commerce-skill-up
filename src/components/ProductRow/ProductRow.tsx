import React, { FC } from 'react';
import { Card, Typography, Grid2 as Grid, styled, Stack } from '@mui/material';
import { ProductRow as ProductRowType } from '../../constants/shoppingCartTypes';


const ProductImage = styled('div')<{ src: string; alt: string; loading: string; }>(({ src }) => ({
  background: `url('${src}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '8rem',
}));

const ProductsCard = styled(Card)(() => ({
  width: '100%'
}))

const ProductRow: FC<ProductRowType> = ({ short_description, quantity, price, product_images, long_description }) => {

  const total = quantity * price;

  return (
    <ProductsCard>
      <Grid container>
        <Grid size={2}>
          <ProductImage
            src={product_images[0].url}
            alt={short_description}
            loading="lazy"
          />
        </Grid>
        <Grid size={5}>
          <Stack>
            <Typography variant='h5'>{short_description}</Typography>
            <Typography>{long_description}</Typography>
          </Stack>
        </Grid>
        <Grid size={1}><Typography>{quantity}</Typography></Grid>
        <Grid size={2}><Typography>${price} MXN</Typography></Grid>
        <Grid size={2}><Typography>${total} MXN</Typography></Grid>
      </Grid>
    </ProductsCard>
  )
}

export default ProductRow;