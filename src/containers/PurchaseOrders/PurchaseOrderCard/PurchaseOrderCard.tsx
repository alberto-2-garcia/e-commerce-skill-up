import { Box, Paper, Stack, Typography, Divider, styled } from '@mui/material';
import { PurchaseOrder } from '../../../constants/purchaseOrdersTypes';
import { DateTime } from 'luxon';
import { formatMoney } from '../../../utils/utils';

function PurchaseOrderHeaderInfo({ label, header }: { label: string | number; header: string; }) {
    return (
        <Box>
            <Typography sx={{ fontWeight: 'bold' }}>{header}</Typography>
            <Typography>{label}</Typography>
        </Box>
    )
}

const ProductImage = styled('div')<{ src: string; alt: string; loading: string; }>(({ src }) => ({
    background: `url('${src}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '6rem',
    height: '6rem',
  }));

function PurchaseOrderCard({ purchase_order_id, products, createdDttm, total }: PurchaseOrder) {
    return (
        <Paper elevation={3}>
            <Stack direction="row" spacing={4} sx={{ padding: 2, background: '#ececec' }}>
                <PurchaseOrderHeaderInfo
                    header='Número de pedido'
                    label={purchase_order_id}
                />
                <PurchaseOrderHeaderInfo
                    header='Fecha'
                    label={DateTime.fromISO(createdDttm).toLocaleString(DateTime.DATE_FULL)}
                />
                <PurchaseOrderHeaderInfo
                    header='Total'
                    label={`$${total} MXN`}
                />
            </Stack>
            <Divider />
            <Box sx={{ padding: 2 }}>
                {products.map(product => (
                    <Stack direction="row" spacing={1}>
                        <ProductImage
                            src={product.product_images[0].url}
                            alt={product.short_description}
                            loading="lazy"
                        />
                        <Stack justifyContent="center">
                            <Typography>{product.short_description}</Typography>
                            <Typography>{formatMoney(product.price)}</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Box>
        </Paper>
    )
}

export default PurchaseOrderCard;