import { Card, CardContent, Typography } from '@mui/material';
import { PurchaseOrder } from '../../../constants/purchaseOrdersTypes';
import { DateTime } from 'luxon';

function PurchaseOrderCard({ purchase_order_id, products, createdDttm, total }: PurchaseOrder) {


    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>Purchase Order</Typography>
                <Typography>{DateTime.fromISO(createdDttm).toLocaleString(DateTime.DATE_FULL)}</Typography>
                <Typography>${total} MXN</Typography>
                <Typography>Order #{purchase_order_id}</Typography>
            </CardContent>
        </Card>
    )
}

export default PurchaseOrderCard;